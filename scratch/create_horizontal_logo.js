const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createHorizontalLogo() {
  const imgDir = path.join(__dirname, '..', 'public', 'images');

  for (const variant of ['white', 'dark']) {
    const emblemPath = path.join(imgDir, `elyne-luxe-emblem-${variant}.png`);
    const wordmarkPath = path.join(imgDir, `elyne-luxe-wordmark-${variant}.png`);

    // Target heights
    const targetHeight = 140;
    const emblemBuffer = await sharp(emblemPath)
      .resize({ height: targetHeight })
      .png()
      .toBuffer();

    const wordmarkBuffer = await sharp(wordmarkPath)
      .resize({ height: Math.round(targetHeight * 0.7) })
      .png()
      .toBuffer();

    const emblemMeta = await sharp(emblemBuffer).metadata();
    const wordmarkMeta = await sharp(wordmarkBuffer).metadata();

    const gap = 36;
    const totalWidth = emblemMeta.width + gap + wordmarkMeta.width;
    const canvasHeight = Math.max(emblemMeta.height, wordmarkMeta.height);

    const emblemTop = Math.round((canvasHeight - emblemMeta.height) / 2);
    const wordmarkTop = Math.round((canvasHeight - wordmarkMeta.height) / 2);

    await sharp({
      create: {
        width: totalWidth,
        height: canvasHeight,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([
        { input: emblemBuffer, left: 0, top: emblemTop },
        { input: wordmarkBuffer, left: emblemMeta.width + gap, top: wordmarkTop }
      ])
      .png()
      .toFile(path.join(imgDir, `elyne-luxe-horizontal-${variant}.png`));

    console.log(`Created elyne-luxe-horizontal-${variant}.png (${totalWidth}x${canvasHeight})`);
  }
}

createHorizontalLogo().catch(console.error);
