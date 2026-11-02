const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function cropPillars() {
  const imgDir = path.join(__dirname, '..', 'public', 'images');

  // Let's crop the whole pillars row: x: 2700 to 4950
  const fullRow = await sharp('public/page_2_hires.png')
    .extract({ left: 2700, top: 2150, width: 2250, height: 550 })
    .toBuffer();

  fs.writeFileSync(path.join(imgDir, 'brand-pillars-full.png'), fullRow);
  console.log('Saved brand-pillars-full.png');

  // Let's extract the 3 icons individually:
  // Icon 1 (Quality - circle weave): x roughly 2900 to 3300 on page 2 (in fullRow x: 200 to 600)
  // Icon 2 (Elegance - 4-pointed star): in fullRow x: 800 to 1250
  // Icon 3 (Comfort - lotus floral): in fullRow x: 1450 to 1950

  // Icon 1: Quality
  await sharp('public/page_2_hires.png')
    .extract({ left: 2900, top: 2180, width: 380, height: 380 })
    .toFile(path.join(imgDir, 'icon-pillar-quality.png'));

  // Icon 2: Elegance
  await sharp('public/page_2_hires.png')
    .extract({ left: 3680, top: 2180, width: 380, height: 380 })
    .toFile(path.join(imgDir, 'icon-pillar-elegance.png'));

  // Icon 3: Comfort
  await sharp('public/page_2_hires.png')
    .extract({ left: 4420, top: 2180, width: 380, height: 380 })
    .toFile(path.join(imgDir, 'icon-pillar-comfort.png'));

  console.log('Saved 3 individual pillar icons');
}

cropPillars().catch(console.error);
