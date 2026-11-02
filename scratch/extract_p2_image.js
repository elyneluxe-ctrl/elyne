const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { PDFDocument, PDFName } = require('pdf-lib');

async function extractP2() {
  const pdfBytes = fs.readFileSync('ELYNE LUXE.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const page2 = pdfDoc.getPages()[1];

  const resources = page2.node.Resources();
  const xObjectDict = resources.lookup(PDFName.of('XObject'));
  const x6 = pdfDoc.context.lookup(xObjectDict.get(PDFName.of('X6')));

  const decompressed = zlib.inflateSync(x6.contents);

  const outPath = path.join(__dirname, '..', 'public', 'images', 'brand-story-kandura-original.jpg');
  fs.writeFileSync(outPath, decompressed);
  console.log(`Saved decompressed JPEG ${outPath} (${decompressed.length} bytes)`);
}

extractP2().catch(console.error);
