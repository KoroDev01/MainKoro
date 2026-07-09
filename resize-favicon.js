import sharp from "sharp";

await sharp("public/favicon.png")
  .resize(96, 96)
  .png()
  .toFile("public/favicon.png");

console.log("favicon.png créé en 96x96 !");
