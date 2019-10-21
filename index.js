const pp = require("puppeteer")

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
  , headless: false
  }) // debug用途にheadlessをfalseにしてgui表示させてる.
  const tab = browser.newPage()
  tab.goto('https://beterugift.jp/#top')
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
  await browser.close()
})()
