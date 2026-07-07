import * as cheerio from "cheerio";

const url = "https://insidetoursja.com/";
const host = new URL(url).host;
const UA = "Mozilla/5.0 (compatible; AuroraIngest/1.0)";
const MAX_PAGES = 14;
const MAX_IMAGES = 500;

const abs = (u) => { if (!u) return null; try { return new URL(u, url).toString(); } catch { return null; } };
const sameHost = (u) => { try { return new URL(u).host === host; } catch { return false; } };
const largestFromSrcset = (ss) => {
  if (!ss) return null;
  const parts = ss.split(",").map((p) => p.trim().split(/\s+/));
  parts.sort((a, b) => (parseInt(b[1]) || 0) - (parseInt(a[1]) || 0));
  return parts[0]?.[0] || null;
};

async function fetchText(u) {
  const res = await fetch(u, { headers: { "User-Agent": UA, Accept: "text/html,*/*" }, redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.text();
}

const visited = new Set();
const queue = [url];
const imageUrls = new Set();
const pageImageMap = []; // { path, imgs: [{src, alt}] }

while (queue.length && visited.size < MAX_PAGES) {
  const page = queue.shift();
  if (visited.has(page)) continue;
  visited.add(page);
  let html;
  try { html = await fetchText(page); } catch { continue; }
  const $ = cheerio.load(html);
  const path = (() => { try { return new URL(page).pathname; } catch { return "/"; } })();

  const pageImgs = [];
  $("img").each((_, el) => {
    const u = abs(largestFromSrcset($(el).attr("srcset")) || $(el).attr("src") || $(el).attr("data-src"));
    const alt = $(el).attr("alt") || "";
    if (u && !u.startsWith("data:")) {
      imageUrls.add(u);
      pageImgs.push({ src: u, alt });
    }
  });
  pageImageMap.push({ path, imgs: pageImgs });

  $("a[href]").each((_, el) => {
    const u = abs($(el).attr("href"));
    if (u && sameHost(u) && !u.includes("#") && !/\.(pdf|zip|jpg|png|webp|svg|mp4)$/i.test(u)) {
      if (!visited.has(u) && queue.length + visited.size < MAX_PAGES) queue.push(u);
    }
  });
}

const imgList = [...imageUrls].slice(0, MAX_IMAGES);
const indexOf = new Map(imgList.map((u, i) => [u, i + 1]));

console.log("=== img-NNN -> source URL (crawl order) ===");
imgList.forEach((u, i) => console.log(`img-${String(i + 1).padStart(3, "0")}  ${u}`));

console.log("\n=== per-page image order with alt text ===");
for (const p of pageImageMap) {
  console.log(`\n--- ${p.path} ---`);
  for (const im of p.imgs) {
    const idx = indexOf.get(im.src);
    console.log(`  ${idx ? "img-" + String(idx).padStart(3, "0") : "(skipped)"}  alt="${im.alt}"  ${im.src}`);
  }
}
