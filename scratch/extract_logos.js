const fs = require('fs');
const path = require('path');
const { PDFDocument, PDFName, PDFRawStream } = require('pdf-lib');
const zlib = require('zlib');
const sharp = require('sharp');

async function extractImages() {
  const pdfBytes = fs.readFileSync('ELYNE LUXE.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const outDir = path.join(__dirname, '..', 'public', 'extracted_logos');
  fs.mkdirSync(outDir, { recursive: true });

  const pages = pdfDoc.getPages();
  for (let pIdx = 0; pIdx < pages.length; pIdx++) {
    const page = pages[pIdx];
    const resources = page.node.Resources();
    if (!resources) continue;
    const xObjectDict = resources.lookup(PDFName.of('XObject'));
    if (!xObjectDict) continue;

    const entries = xObjectDict.entries();
    for (const [key, ref] of entries) {
      const obj = pdfDoc.context.lookup(ref);
      if (!obj || !(obj instanceof PDFRawStream)) continue;

      const subtype = obj.dict.lookup(PDFName.of('Subtype'));
      if (subtype && subtype.toString() === '/Image') {
        const filter = obj.dict.lookup(PDFName.of('Filter'));
        const width = parseInt(obj.dict.lookup(PDFName.of('Width'))?.toString() || '0');
        const height = parseInt(obj.dict.lookup(PDFName.of('Height'))?.toString() || '0');
        const colorSpace = obj.dict.lookup(PDFName.of('ColorSpace'))?.toString();
        const bpc = parseInt(obj.dict.lookup(PDFName.of('BitsPerComponent'))?.toString() || '8');
        
        console.log(`Page ${pIdx + 1} Image: key=${key.toString()}, filter=${filter?.toString()}, ${width}x${height}, cs=${colorSpace}`);

        const contents = obj.contents;
        const keyClean = key.toString().replace('/', '');
        
        if (filter?.toString() === '/DCTDecode') {
          // Standard JPEG
          const filename = `page_${pIdx + 1}_${keyClean}.jpg`;
          fs.writeFileSync(path.join(outDir, filename), contents);
          console.log(`Saved ${filename}`);
        } else if (filter?.toString() === '/FlateDecode') {
          try {
            const decompressed = zlib.inflateSync(contents);
            let channels = 3;
            if (colorSpace === '/DeviceGray') channels = 1;
            else if (colorSpace === '/DeviceRGB') channels = 3;
            else if (colorSpace === '/DeviceCMYK') channels = 4;

            if (decompressed.length >= width * height * channels) {
              const filename = `page_${pIdx + 1}_${keyClean}.png`;
              await sharp(decompressed, {
                raw: {
                  width,
                  height,
                  channels
                }
              }).toFile(path.join(outDir, filename));
              console.log(`Saved PNG ${filename}`);
            } else {
              console.log(`Size mismatch for raw image: ${decompressed.length} vs ${width * height * channels}`);
            }
          } catch (e) {
            console.log(`Error decompressing ${keyClean}:`, e.message);
          }
        }
      }
    }
  }
}

extractImages().catch(console.error);
