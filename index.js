const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto('https://www.mbl.is/fasteignir/fasteign/1472518/', {
      waitUntil: 'networkidle2',
    });

    console.log("Page loaded");

    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });

    console.log("Scrolled");

    await page.waitForTimeout?.(5000) ?? new Promise(r => setTimeout(r, 5000));
    await browser.close();
    console.log("Browser closed");
  } catch (error) {
    console.error("❌ Error occurred:", error);
  }
})();
