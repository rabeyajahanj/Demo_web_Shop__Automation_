import { Builder, By } from "selenium-webdriver";
import { Base } from "./base.js";

 class RegisterPage extends Base {
    constructor(){
        super(); // extend kora class er constructor k call korbe
    //     this.driver = new Builder().forBrowser("chrome").build();
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
    // async openBrowser(url){
    //     console.log("Browser opened successfully");
    //     await this.driver.get(url);
    //     await this.driver.manage().window().maximize();
   // }
    async clickRegisterLink() {
        console.log("Register link clicked successfully");
        await this.driver.findElement(this.registerlink).click();
    }

    async clickGender() {
        console.log("Gender clicked successfully");
        await this.driver.findElement(this.gender).click();
    }

    async enterFirstName(firstname){
        console.log("First name entered successfully");
        await this.driver.findElement(this.firstname).sendKeys(firstname);
    }

    async enterLastName(lastname){
        console.log("Last name entered successfully");
        await this.driver.findElement(this.lastname).sendKeys(lastname);
    }
  
    async enterEmail(email) {
        console.log("Email entered successfully");
        await this.driver.findElement(this.email).sendKeys(email);
    }
    

    async enterPassword(password) {
        console.log("Password entered successfully");
        await this.driver.findElement(this.password).sendKeys(password); 
    }
    
      async enterConfirmPassword(password){
        console.log("Confirm Password entered successfully");
        await this.driver.findElement(this.confimpassword).sendKeys(password);
    }
    
      async enterRegisterButton(){
        console.log("Register entered successfully");
        await this.driver.findElement(this.registerbutton).click();
    }

    async enterLogoutButton(){
        console.log("Logout button clicked successfully");
        await this.driver.findElement(this.logoutbutton).click();
    }   

    // async closeBrowser() {
    //     console.log("Browser closed successfully");
    //     await this.driver.quit();
    // }
    
}
export{RegisterPage};
// const result = new Register();
//  await result.openBrowser();
//  await result.clickRegisterLink();
//  await result.clickGender();
//  await result.enterFirstName();
//  await result.enterLastName();
//  await result.enterEmail();
//  await result.enterPassword();
//  await result.enterConfirmPassword();
//  await result.enterRegisterButton();
//  await result.enterLogoutButton();
//  await result.closeBrowser();
