// Removes platform-injected preview scripts (recording, analytics, element
// picker) from index.html before every production build so that no preview
// tooling, tracking, or branding ever ships to the live site.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const file = 'index.html';
if (!existsSync(file)) process.exit(0);

let html = readFileSync(file, 'utf8');
const before = html.length;

for (const attr of ['data-arena-recording', 'data-arena-views', 'data-element-picker']) {
  const pattern = new RegExp('<script\\s+' + attr + '[^>]*>[\\s\\S]*?</script>\\s*', 'g');
  html = html.replace(pattern, '');
}

if (html.length !== before) {
  writeFileSync(file, html);
  console.log(`[strip-injected] removed injected preview scripts (${before - html.length} bytes)`);
} else {
  console.log('[strip-injected] index.html already clean');
}
