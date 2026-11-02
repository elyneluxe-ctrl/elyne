const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function cropPage2() {
  const imgDir = path.join(__dirname, '..', 'public', 'images');

  // Let's inspect where the photo is in page 2 (5120x2880)
  // In the layout:
  // Photo is on the right: x starts around ~55% (x ~ 2850), y starts around ~12% (y ~ 350)
  // Width ~ 1400, Height ~ 1700
  // Let's crop a test region and verify
  await sharp('public/page_2_hires.png')
    .extract({ left: 2850, top: 350, width: 1400, height: 1750 })
    .toFile(path.join(imgDir, 'brand-story-kandura.jpg'));
  console.log('Saved brand-story-kandura.jpg');

  // Three pillars icons below the photo (y: ~2100 to ~2650, x: ~2800 to ~4300)
  await sharp('public/page_2_hires.png')
    .extract({ left: 2800, top: 2150, width: 1450, height: 500 })
    .toFile(path.join(imgDir, 'brand-story-pillars.png'));
  console.log('Saved brand-story-pillars.png');
}

cropPage2().catch(console.error);
