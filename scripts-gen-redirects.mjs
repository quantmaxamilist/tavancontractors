// node scripts-gen-redirects.mjs → writes vercel.json, public/_redirects and REDIRECTS.md from redirects.mjs
import { writeFileSync } from 'node:fs';
import { oldUrls } from './redirects.mjs';
const entries = Object.entries(oldUrls);
writeFileSync('vercel.json', JSON.stringify({ cleanUrls: true, trailingSlash: false,
  redirects: entries.map(([source, destination]) => ({ source, destination, permanent: true })) }, null, 2) + '\n');
writeFileSync('public/_redirects', entries.map(([a, b]) => `${a}  ${b}  301`).join('\n') + '\n');
writeFileSync('REDIRECTS.md', `# Old URL → new URL (301)\n\nGenerated from \`redirects.mjs\`. Old URLs come from the Wix sitemap and the Wayback Machine index.\n\n| Old URL | New URL |\n|---|---|\n${entries.map(([a, b]) => `| \`${a}\` | \`${b}\` |`).join('\n')}\n\nUnchanged: \`/\`, \`/privacy-policy\`, \`/cookie-policy\`.\n`);
console.log(entries.length, 'redirects');
