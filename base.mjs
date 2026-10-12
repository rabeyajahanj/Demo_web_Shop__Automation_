import {Builder, By} from 'selenium-webdriver';

class Base {
    constructor() {          //compile korar time e constructor call hoye jabe automatic alada vhabe call korte hobe na
        this.driver = new Builder().forBrowser('chrome').build(); // new builder object er moddhe ekta hocce for browser method jeta browser er name nibe and build method call korbe
    }
    async openBrowser() {    //async function er vitore await use korte hobe
        console.log("Browser opened successfully");
        //await this.driver.get("https://www.npmjs.com/");
        await this.driver.get("https://princebazarbd.com/");
    }       

    async closeBrowser() {   
        console.log("Browser closed successfully");
         await this.driver.quit();
    }
}
const result = new Base();
      result.openBrowser();
      result.closeBrowser();