const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function makeIconsTransparent() {
  const imgDir = path.join(__dirname, '..', 'public', 'images');
  
  for (const name of ['quality', 'elegance', 'comfort']) {
    const file = path.join(imgDir, `icon-pillar-${name}.png`);
    const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
    const w = info.width, h = info.height;
    const rgba = Buffer.alloc(w * h * 4);

    for (let i = 0; i < w * h; i++) {
      const r = data[i * info.channels];
      const g = data[i * info.channels + 1];
      const b = data[i * info.channels + 2];

      const diff = Math.max(0, 248 - r, 245 - g, 240 - b);
      let alpha = 0;
      if (diff > 8) {
        alpha = Math.min(255, Math.round(((diff - 8) / 35) * 255));
      }

      // Golden stroke color
      rgba[i * 4] = r;
      rgba[i * 4 + 1] = g;
      rgba[i * 4 + 2] = b;
      rgba[i * 4 + 3] = alpha;
    }

    await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
      .trim()
      .png()
      .toFile(path.join(imgDir, `pillar-${name}-trans.png`));
    console.log(`Saved pillar-${name}-trans.png`);
  }
}

makeIconsTransparent().catch(console.error);
