import { Builder, By } from "selenium-webdriver";

class LoginPage {
constructor(){
    this.driver = new Builder().forBrowser("chrome").build();
    this.Loginlink = By.xpath("//a[@href='/login']");
    this.email =By.id("Email");
    this.password = By.id("Password");
    this.rememberme = By.id("RememberMe");
    this.loginbutton = By.xpath("//input[@value='Log in']");
}
    async openBrowser(url) {
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }
   
    async clickLoginLink(){
        await this.driver.findElement(this.Loginlink).click();
    }

    async enterEmail(email){
        await this.driver.findElement(this.email).sendKeys(email);
    }
   
    async enterPassword(password){
        await this.driver.findElement(this.password).sendKeys(password);
    }

    async ClickRememberMe(){
        await this.driver.findElement(this.rememberme).click();
    }

    async ClickLoginButton(){
        await this.driver.findElement(this.loginbutton).click();
    }

     async closeBrowser() {
        await this.driver.quit();
    }

}
export {LoginPage};
// const result = new Login();
//await result.openBrowser();
// await result.clickLoginLink();
// await result.enterEmail();
// await result.enterPassword();
// await result.ClickRememberMe();
// await result.ClickLoginButton();
