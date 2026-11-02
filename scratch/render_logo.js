const fs = require('fs');
const path = require('path');

// Alias canvas to @napi-rs/canvas
const canvasDir = path.join(__dirname, '..', 'node_modules', 'canvas');
fs.mkdirSync(canvasDir, { recursive: true });
fs.writeFileSync(path.join(canvasDir, 'index.js'), 'module.exports = require("@napi-rs/canvas");\n');
fs.writeFileSync(path.join(canvasDir, 'package.json'), '{"name":"canvas","version":"1.0.0","main":"index.js"}\n');

const { createCanvas } = require('@napi-rs/canvas');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');

async function renderPages() {
  const data = new Uint8Array(fs.readFileSync('ELYNE LUXE.pdf'));
  const doc = await pdfjs.getDocument({ data }).promise;
  console.log('PDF loaded, total pages:', doc.numPages);

  // Render Page 3 (Master Logo) and Page 4 (Variations) and Page 6 (Reversed)
  for (const pageNum of [3, 4, 6]) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 4.0 }); // 4x high resolution (approx 4000x2250)
    
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');

    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;

    const buffer = canvas.toBuffer('image/png');
    const outPath = path.join(__dirname, '..', 'public', `page_${pageNum}_hires.png`);
    fs.writeFileSync(outPath, buffer);
    console.log(`Rendered page ${pageNum} to ${outPath} (${viewport.width}x${viewport.height})`);
  }
}

renderPages().catch(console.error);
