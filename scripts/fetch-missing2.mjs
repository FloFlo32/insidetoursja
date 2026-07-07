import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

const UA = "Mozilla/5.0 (compatible; AuroraIngest/1.0)";
const dir = "public/ingested/insidetoursja";
const items = [
  ["img-042", "https://insidetoursja.com/wp-content/uploads/2022/08/42410272_2174668996126466_890665596012724224_n-1024x1024.jpg"],
  ["img-054", "https://insidetoursja.com/wp-content/uploads/2022/10/PHOTO-2022-10-18-08-02-57.jpg"],
  ["img-065", "https://insidetoursja.com/wp-content/uploads/2022/08/18056077_1868711393388896_4303403798529548025_o-768x1024.jpg"],
  ["img-066", "https://insidetoursja.com/wp-content/uploads/2022/08/56894360_2299148037011894_3885096664272207872_n.jpg"],
  ["img-068", "https://insidetoursja.com/wp-content/uploads/2022/08/18738688_1888940351366000_3490768704263043179_o-1-768x1024.jpg"],
  ["img-069", "https://insidetoursja.com/wp-content/uploads/2022/08/19029653_1896401587286543_2260678797475368432_n.jpg"],
  ["img-070", "https://insidetoursja.com/wp-content/uploads/2022/08/15723719_1803302286596474_2661605752231950013_o.jpg"],
  ["img-071", "https://insidetoursja.com/wp-content/uploads/2022/08/21246466_1940551136204921_1876425190690530069_o.jpg"],
  ["img-072", "https://insidetoursja.com/wp-content/uploads/2022/08/41097917_2165620903697942_1436364160454623232_n.jpg"],
  ["img-073", "https://insidetoursja.com/wp-content/uploads/2022/10/PHOTO-2022-09-01-00-27-26-1.jpg"],
  ["img-074", "https://insidetoursja.com/wp-content/uploads/2022/08/50568697_2243337335926298_5110085581212221440_n.jpg"],
  ["img-075", "https://insidetoursja.com/wp-content/uploads/2022/08/16835777_1837404273186275_4446127604961396455_o-980x551.jpg"],
  ["img-076", "https://insidetoursja.com/wp-content/uploads/2022/08/19574935_1910858759174159_8267747802874836332_o-1.jpg"],
  ["img-077", "https://insidetoursja.com/wp-content/uploads/2022/08/21753135_1945540242372677_730221881917370118_o.jpg"],
  ["img-078", "https://insidetoursja.com/wp-content/uploads/2022/08/24291512_1981805378746163_8768130490809895579_o.jpg"],
  ["img-079", "https://insidetoursja.com/wp-content/uploads/2022/10/PHOTO-2022-10-18-07-43-50-1.jpg"],
  ["img-080", "https://insidetoursja.com/wp-content/uploads/2022/08/118299976_2710856402507720_843508362089166518_n-820x1024.jpg"],
  ["img-081", "https://insidetoursja.com/wp-content/uploads/2022/08/18664618_1887250291535006_7622902536256637298_n.jpg"],
  ["img-082", "https://insidetoursja.com/wp-content/uploads/2022/08/23213230_1967691190157582_786651647128202620_o.jpg"],
  ["img-083", "https://insidetoursja.com/wp-content/uploads/2022/08/20229299_1921087804817921_1313928373059867613_n.jpg"],
  ["img-084", "https://insidetoursja.com/wp-content/uploads/2022/08/17493240_1854738111452891_3113239049655162462_o.jpg"],
  ["img-085", "https://insidetoursja.com/wp-content/uploads/2022/08/27503766_2014156025511098_36178892411589300_o.jpg"],
  ["img-086", "https://insidetoursja.com/wp-content/uploads/2022/10/PHOTO-2022-09-01-00-50-41.jpg"],
  ["img-087", "https://insidetoursja.com/wp-content/uploads/2022/10/PHOTO-2022-10-18-07-49-42.jpg"],
  ["img-089", "https://insidetoursja.com/wp-content/uploads/2022/08/27983493_2020855984841102_6853167429012467618_o-1024x1024.jpg"],
  ["img-090", "https://insidetoursja.com/wp-content/uploads/2022/09/PHOTO-2022-09-01-00-27-27-980x943.jpg"],
  ["img-091", "https://insidetoursja.com/wp-content/uploads/2022/08/15975096_1816655938594442_8682883599072722553_o-1-768x1024.jpg"],
];

for (const [name, u] of items) {
  try {
    const res = await fetch(u, { headers: { "User-Agent": UA } });
    if (!res.ok) { console.log(`FAILED ${res.status} ${name} <- ${u}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const out = await sharp(buf, { failOn: "none" }).rotate().resize(1400, 1400, { fit: "inside", withoutEnlargement: true }).webp({ quality: 68 }).toBuffer();
    await writeFile(join(dir, `${name}.webp`), out);
    console.log(`saved ${name}.webp (${out.length} bytes)`);
  } catch (e) {
    console.log(`ERROR ${name}: ${e.message}`);
  }
}
