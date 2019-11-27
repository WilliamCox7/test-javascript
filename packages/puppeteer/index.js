const puppeteer = require('puppeteer');

async function test(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  
  let values = await page.evaluate(() => {
    let text1 = document.querySelector('[class*=pageTitle]').innerText;
    let text2 = document.querySelector('[class*=filterContainer]').firstElementChild.innerText;
    
    return { text1, text2 };
  });

  console.log("TEXT:", values);
  
  await browser.close();
}

test("https://www.churchofjesuschrist.org/temples/details/salt-lake-temple?lang=eng");