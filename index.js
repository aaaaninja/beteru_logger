const pp = require('puppeteer');

(async () => {
  const browser = await pp.launch({
    args: [ '--disable-gpu'
          , '--disable-dev-shm-usage'
          , '--disable-setuid-sandbox'
          , '--no-first-run'
          , '--no-sandbox'
          , '--no-zygote'
          , '--single-process'
          ]
//, headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://beterugift.jp/#top');
////////////////////////////////////////////////////////////////////////////////
  await page.waitForSelector('#gift_table');

  const allDiscountRate = await page.evaluate(() => {
    const targetTableRows = document.querySelector('#gift_table').querySelectorAll('tr');

    return [...targetTableRows].map(row => {
      const discountRate = row.querySelector('.fsw');

      if (discountRate) return discountRate.textContent.trim();
      return '-1';
    }).map(el => Number(el.replace(/%/,'')));
  });

  console.log(Math.min(...allDiscountRate.filter((r) => 0 < r).sort())); // 有効パーセンテージのみ抽出するし, 最小値を標準出力に出す.
////////////////////////////////////////////////////////////////////////////////
  await browser.close();
})();
