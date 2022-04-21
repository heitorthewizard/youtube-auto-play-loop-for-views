const ppt = require("puppeteer");

async function watchVideoFor20seconds(link) {
  const browser = await ppt.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(link);
  await page.waitForTimeout(1500);
  await page.click(".ytp-play-button");
  await page.waitForTimeout(1000 * 20)
  browser.close();
}

// loop the video every 30 seconds
setInterval(()=>{
  watchVideoFor20seconds("https://www.youtube.com/watch?v=S17Ql0Z4en4") // add the video link
},1000 * 50) // watch 50 seconds of the video

console.log('Bot is running...')
