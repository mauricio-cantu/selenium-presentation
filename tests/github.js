import { By, Key, Builder } from "selenium-webdriver";
import "chromedriver";
import { Browser } from "selenium-webdriver";
const sleep = 3000;

async function runTest() {
    // abre o navegador
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();

    await driver.sleep(sleep);

    // acessa a home do github
    await driver.get("https://github.com");

    // aperta "/" para habilitar o campo de busca
    driver.actions().keyDown(Key.DIVIDE);

    const searchField = await driver.switchTo().activeElement();
    await driver.sleep(sleep);

    // insere o termo de pesquisa no campo
    await searchField.sendKeys('sselenium');

    await driver.sleep(sleep);

    // pressiona "enter" para realizar a pesquisa
    await searchField.sendKeys(Key.ENTER);

    // encontra o link do repositorio do Selenium
    const link = await driver.findElement(By.xpath('//a[contains(@href,"SeleniumHQ/selenium")]'))

    await driver.sleep(sleep);

    // clica no link
    await link.click();

    await driver.sleep(sleep);

    // fecha o navegador
    await driver.close();

}

runTest();