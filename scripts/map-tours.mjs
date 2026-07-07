import * as cheerio from "cheerio";

const url = "https://insidetoursja.com/tours-excursions/";
const UA = "Mozilla/5.0 (compatible; AuroraIngest/1.0)";
const abs = (u) => { if (!u) return null; try { return new URL(u, url).toString(); } catch { return null; } };
const largestFromSrcset = (ss) => {
  if (!ss) return null;
  const parts = ss.split(",").map((p) => p.trim().split(/\s+/));
  parts.sort((a, b) => (parseInt(b[1]) || 0) - (parseInt(a[1]) || 0));
  return parts[0]?.[0] || null;
};

const res = await fetch(url, { headers: { "User-Agent": UA } });
const html = await res.text();
const $ = cheerio.load(html);

console.log("=== ALL images in DOM order on /tours-excursions/ ===\n");
$("img").each((i, el) => {
  const src = abs(largestFromSrcset($(el).attr("srcset")) || $(el).attr("src") || $(el).attr("data-src"));
  const alt = $(el).attr("alt") || "";
  const cls = $(el).attr("class") || "";
  // nearest heading text before this image
  console.log(`${i}  alt="${alt}"  class="${cls}"  ${src}`);
});

console.log("\n=== headings (h1-h4) in DOM order ===\n");
$("h1,h2,h3,h4").each((i, el) => {
  console.log(`${i}  <${el.tagName}>  ${$(el).text().trim()}`);
});
