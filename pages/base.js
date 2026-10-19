import { Builder, By } from "selenium-webdriver";

 class Base {
    constructor(){
        this.driver = new Builder().forBrowser("chrome").build();
        this.registerlink = By.xpath("//a[@href='/register']"); //locator for register link; inside the constructor keep locator- run korle automatic involve hote hobe jeta constructor kore.
        this.gender = By.id("gender-female");
        this.firstname = By.id("FirstName");
        this.lastname = By.id("LastName");
        this.email = By.id("Email");
        this.password = By.id("Password");
        this.confimpassword =By.id("ConfirmPassword");
        this.registerbutton = By.id("register-button");
        this.logoutbutton =By.xpath("//a[@href='/logout']");
    }
    async openBrowser(url){
        console.log("Browser opened successfully");
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }

    async closeBrowser() {
        console.log("Browser closed successfully");
        await this.driver.quit();
    }
    
}
export {Base};