const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processLogos() {
  const outDir = path.join(__dirname, '..', 'public', 'images');
  fs.mkdirSync(outDir, { recursive: true });

  // Page 3 has 5120x2880
  // Logo BBox: minX: 1197, maxX: 3922, minY: 969, maxY: 1910
  const pad = 40;
  const cropLeft = 1197 - pad;
  const cropTop = 969 - pad;
  const cropWidth = 2725 + pad * 2;
  const cropHeight = 941 + pad * 2;

  const cropped = await sharp('public/page_3_hires.png')
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = cropped.info.width;
  const h = cropped.info.height;
  const channels = cropped.info.channels; // 4 channels!
  const data = cropped.data;

  const darkRgba = Buffer.alloc(w * h * 4);
  const whiteRgba = Buffer.alloc(w * h * 4);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * channels;
      const dstIdx = (y * w + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      // Difference from ivory background (#F9F5EF -> 249, 245, 239)
      const diff = Math.max(0, 249 - r, 245 - g, 239 - b);

      let alpha = 0;
      if (diff > 8) {
        alpha = Math.min(255, Math.round(((diff - 8) / 40) * 255));
      }

      // Dark logo (#1F2A24)
      darkRgba[dstIdx] = 31;
      darkRgba[dstIdx + 1] = 42;
      darkRgba[dstIdx + 2] = 36;
      darkRgba[dstIdx + 3] = alpha;

      // White logo (#FFFFFF)
      whiteRgba[dstIdx] = 255;
      whiteRgba[dstIdx + 1] = 255;
      whiteRgba[dstIdx + 2] = 255;
      whiteRgba[dstIdx + 3] = alpha;
    }
  }

  // Save Master Logo Dark
  await sharp(darkRgba, { raw: { width: w, height: h, channels: 4 } })
    .trim()
    .png()
    .toFile(path.join(outDir, 'elyne-luxe-logo-dark.png'));
  console.log('Saved elyne-luxe-logo-dark.png');

  // Save Master Logo White
  await sharp(whiteRgba, { raw: { width: w, height: h, channels: 4 } })
    .trim()
    .png()
    .toFile(path.join(outDir, 'elyne-luxe-logo-white.png'));
  console.log('Saved elyne-luxe-logo-white.png');

  // Now create the Emblem alone and Wordmark alone from the trimmed logos
  const trimmedMeta = await sharp(path.join(outDir, 'elyne-luxe-logo-dark.png')).metadata();
  console.log('Trimmed master logo dimensions:', trimmedMeta.width, 'x', trimmedMeta.height);

  // In the master logo:
  // Top ~45% is the emblem (kandura collar/falcon wings)
  // Bottom ~55% is 'ELYNE LUXE' and 'A SIGNATURE OF ELEGANCE'
  const emblemHeight = Math.floor(trimmedMeta.height * 0.44);
  const textTop = Math.floor(trimmedMeta.height * 0.52);

  // Emblem
  await sharp(path.join(outDir, 'elyne-luxe-logo-dark.png'))
    .extract({ left: 0, top: 0, width: trimmedMeta.width, height: emblemHeight })
    .trim()
    .png()
    .toFile(path.join(outDir, 'elyne-luxe-emblem-dark.png'));

  await sharp(path.join(outDir, 'elyne-luxe-logo-white.png'))
    .extract({ left: 0, top: 0, width: trimmedMeta.width, height: emblemHeight })
    .trim()
    .png()
    .toFile(path.join(outDir, 'elyne-luxe-emblem-white.png'));
  console.log('Saved emblem images');

  // Wordmark + Tagline
  await sharp(path.join(outDir, 'elyne-luxe-logo-dark.png'))
    .extract({ left: 0, top: textTop, width: trimmedMeta.width, height: trimmedMeta.height - textTop })
    .trim()
    .png()
    .toFile(path.join(outDir, 'elyne-luxe-wordmark-dark.png'));

  await sharp(path.join(outDir, 'elyne-luxe-logo-white.png'))
    .extract({ left: 0, top: textTop, width: trimmedMeta.width, height: trimmedMeta.height - textTop })
    .trim()
    .png()
    .toFile(path.join(outDir, 'elyne-luxe-wordmark-white.png'));
  console.log('Saved wordmark images');
}

processLogos().catch(console.error);
