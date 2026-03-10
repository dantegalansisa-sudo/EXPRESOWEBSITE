import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

// Desktop full page
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:5175', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

// Scroll through entire page to trigger whileInView animations
const totalHeight = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < totalHeight; y += 400) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
  await page.waitForTimeout(300);
}
// Scroll back to top
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1000);

await page.screenshot({ path: 'desktop-full.png', fullPage: true });
await page.screenshot({ path: 'desktop-hero.png' });

// Scroll to middle sections
await page.evaluate(() => window.scrollTo(0, 1500));
await page.waitForTimeout(500);
await page.screenshot({ path: 'desktop-mid.png' });

// Scroll to contact/footer
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 900));
await page.waitForTimeout(500);
await page.screenshot({ path: 'desktop-bottom.png' });

// Mobile
await page.setViewportSize({ width: 375, height: 812 });
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

const mobileHeight = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < mobileHeight; y += 400) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
  await page.waitForTimeout(300);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1000);
await page.screenshot({ path: 'mobile-full.png', fullPage: true });

await browser.close();
console.log('Screenshots saved!');
