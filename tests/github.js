import { By, Key, Builder } from "selenium-webdriver";
import "chromedriver";
const sleep = 4000;

async function seleniumGithub () {
    // abre o navegador
    const driver = await new Builder().forBrowser("chrome").build();
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

    const link = await driver.findElement(By.xpath('//a[contains(@href,"SeleniumHQ/selenium")]'))

    await driver.sleep(sleep);

    await link.click();

}

seleniumGithub();