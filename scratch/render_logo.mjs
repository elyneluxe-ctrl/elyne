if (!Promise.try) {
  Promise.try = function (fn, ...args) {
    return new Promise((resolve) => resolve(fn(...args)));
  };
}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from '@napi-rs/canvas';
import * as pdfjs from 'pdfjs-dist/build/pdf.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function renderPages() {
  const data = new Uint8Array(fs.readFileSync('ELYNE LUXE.pdf'));
  const doc = await pdfjs.getDocument({ data }).promise;
  console.log('PDF loaded, total pages:', doc.numPages);

  // Render Page 3 (Master Logo) and Page 4 (Variations) and Page 6
  for (const pageNum of [3, 4, 6]) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 3.0 }); // 3x scale
    
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
