import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

const UA = "Mozilla/5.0 (compatible; AuroraIngest/1.0)";
const dir = "public/ingested/insidetoursja";
const items = [
  ["img-061", "https://insidetoursja.com/wp-content/uploads/2022/10/PHOTO-2022-09-01-00-59-50.jpg"],
  ["img-062", "https://insidetoursja.com/wp-content/uploads/2022/08/164354382_2885947124998646_4142863191782844256_n.jpg"],
  ["img-063", "https://insidetoursja.com/wp-content/uploads/2022/09/PHOTO-2022-09-01-00-40-39.jpg"],
  ["img-064", "https://insidetoursja.com/wp-content/uploads/2022/10/unnamed.jpg"],
];

for (const [name, u] of items) {
  const res = await fetch(u, { headers: { "User-Agent": UA } });
  const buf = Buffer.from(await res.arrayBuffer());
  const out = await sharp(buf, { failOn: "none" }).rotate().resize(1400, 1400, { fit: "inside", withoutEnlargement: true }).webp({ quality: 68 }).toBuffer();
  await writeFile(join(dir, `${name}.webp`), out);
  console.log(`saved ${name}.webp (${out.length} bytes) <- ${u}`);
}
