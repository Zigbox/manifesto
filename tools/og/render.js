// Renders tools/og/og.html to site/og.png (1200x630). Usage: node tools/og/render.js
// Needs Playwright with Chromium (require('playwright')) and network access for Google Fonts.
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'og.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const ok = await page.evaluate(() => document.fonts.check('700 100px "Familjen Grotesk"') && document.fonts.check('500 20px "IBM Plex Mono"'));
  if (!ok) throw new Error('web fonts did not load');
  await page.screenshot({ path: path.join(__dirname, '..', '..', 'site', 'og.png'), type: 'png', omitBackground: false });
  await browser.close();
})();
