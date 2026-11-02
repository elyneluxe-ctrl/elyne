const fs = require('fs');
const path = require('path');
const { createCanvas } = require('@napi-rs/canvas');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');
const sharp = require('sharp');

async function renderPage2() {
  const data = new Uint8Array(fs.readFileSync('ELYNE LUXE.pdf'));
  const doc = await pdfjs.getDocument({ data }).promise;

  const page = await doc.getPage(2);
  const viewport = page.getViewport({ scale: 4.0 }); // 5120 x 2880

  const canvas = createCanvas(viewport.width, viewport.height);
  const context = canvas.getContext('2d');

  await page.render({
    canvasContext: context,
    viewport: viewport
  }).promise;

  const pageBuffer = canvas.toBuffer('image/png');
  fs.writeFileSync('public/page_2_hires.png', pageBuffer);
  console.log('Saved public/page_2_hires.png');

  // Let's also crop the photograph on the right side of Page 2
  // Page 2 dimensions: 5120 x 2880
  // Photo is on the top right
  // Let's inspect photo coordinates
  const meta = await sharp(pageBuffer).metadata();
  console.log('Page 2 dimensions:', meta.width, 'x', meta.height);
}

renderPage2().catch(console.error);
