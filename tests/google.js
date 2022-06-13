import {By, Key, Builder} from 'selenium-webdriver';
import 'chromedriver';
import {Browser} from 'selenium-webdriver';
const sleep = 3000;

async function runTest() {
  // abre o navegador
  const driver = await new Builder().forBrowser(Browser.CHROME).build()

  // maximiza a janela do browser
  await driver.manage().window().maximize()

  await driver.sleep(sleep)

  // acessa o google
  await driver.get("https://google.com");

  await driver.sleep(sleep);

  // pesquisa por 'programming memes'
  await driver.findElement(By.name('q')).sendKeys("programming memes", Key.RETURN);

        await driver.sleep(sleep);

  // localiza o botão de "imagens"
  const imagesTab = await driver.findElement(By.xpath('//*[@id="hdtb-msb"]/div[1]/div/div[2]/a'));

  // clica no botão
  await imagesTab.click();


      await driver.sleep(sleep);

  // fecha o navegador
    await driver.close();
}

runTest();
