const {By, Builder, Browser} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');
const url = 'file:///home/mjochims/Code/personal/selenium-presentation/views/home.html';

it('Should have \'Selenium Presentation\' as page title', async () => {
  const driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(new chrome.Options().headless()).build();
  await driver.get(url);
  expect(await driver.getTitle()).toEqual('Selenium Presentation');
  await driver.quit();
});

it('Should have a \'h1\' element with \'Selenium Presentation Test Page\' text', async () => {
  const driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(new chrome.Options().headless()).build();
  await driver.get(url);
  const h1Text = await driver.findElement(By.css('h1[data-test-id="title"]')).getText();
  expect(h1Text).toEqual('Selenium Presentation Test Page');
  await driver.quit();
});
