const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function buildNavLogos() {
  const imgDir = path.join(__dirname, '..', 'public', 'images');

  for (const variant of ['white', 'dark']) {
    const emblemSrc = path.join(imgDir, `elyne-luxe-emblem-${variant}.png`);
    const wordmarkSrc = path.join(imgDir, `elyne-luxe-wordmark-${variant}.png`);

    // 1. Trim emblem tightly
    const emblemTrimmed = await sharp(emblemSrc).trim().toBuffer();
    const emblemMeta = await sharp(emblemTrimmed).metadata();

    // 2. Extract just 'ELYNE LUXE' (without the tiny subtitle) for the primary nav wordmark
    // From earlier inspection: 'ELYNE LUXE' is y: 0 to 196 in trimmed wordmark
    const wordmarkTrimmed = await sharp(wordmarkSrc).trim().toBuffer();
    const textOnly = await sharp(wordmarkTrimmed)
      .extract({ left: 0, top: 0, width: 2726, height: 200 })
      .trim()
      .toBuffer();
    const textMeta = await sharp(textOnly).metadata();

    // Let's create Option A: Emblem + 'ELYNE LUXE' (Bold, prominent, luxury standard)
    // Target height for emblem: 90px
    const targetEmblemH = 90;
    const emblemResized = await sharp(emblemTrimmed)
      .resize({ height: targetEmblemH })
      .png()
      .toBuffer();
    const eInfo = await sharp(emblemResized).metadata();

    // Target height for 'ELYNE LUXE' letters: 64px (optically matching the emblem weight)
    const targetTextH = 64;
    const textResized = await sharp(textOnly)
      .resize({ height: targetTextH })
      .png()
      .toBuffer();
    const tInfo = await sharp(textResized).metadata();

    const gap = 24;
    const canvasW = eInfo.width + gap + tInfo.width;
    const canvasH = targetEmblemH;

    const emblemTop = 0;
    const textTop = Math.round((canvasH - tInfo.height) / 2);

    await sharp({
      create: {
        width: canvasW,
        height: canvasH,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([
        { input: emblemResized, left: 0, top: emblemTop },
        { input: textResized, left: eInfo.width + gap, top: textTop }
      ])
      .png()
      .toFile(path.join(imgDir, `elyne-luxe-nav-${variant}.png`));

    console.log(`Created elyne-luxe-nav-${variant}.png (${canvasW}x${canvasH})`);

    // Also overwrite horizontal-*.png with this perfectly trimmed & balanced version
    fs.copyFileSync(
      path.join(imgDir, `elyne-luxe-nav-${variant}.png`),
      path.join(imgDir, `elyne-luxe-horizontal-${variant}.png`)
    );
  }
}

buildNavLogos().catch(console.error);
