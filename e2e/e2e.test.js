import puppetteer, { Page } from "puppeteer";
import { fork } from "child_process";

jest.setTimeout(30000); // default puppeteer timeout

describe("Credit Card Validator form", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = "http://localhost:9000";

  beforeEach(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  test("BTN/Valid/Green", async () => {
    // await page.goto(baseUrl);

    // const input = await page.$(".input");
    // let btn = await page.$(".btn");
    // await input.type("4111111111111111");
    // await btn.click();

    // let valueText = await page.$eval(".btn", (el) => el.innerText);
    // let color = await page.$eval(".btn", (el) => el.style.backgroundColor);
    // await expect(valueText).toEqual("Valid");
    // await expect(color).toEqual("green");
  });

  
  afterEach(async () => {
    await browser.close();
    server.kill();
  });
});
