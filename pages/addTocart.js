import { Builder, By } from "selenium-webdriver";
import { Base } from "./base.js";

 class AddtoCart extends Base{
    constructor() {
        super();
     this.books = By.xpath("//a[@href='/books']");
     this.dropdown = By.xpath("//select[@id='products-orderby']/option[text()='Name: A to Z']");
    }
        async clickonBookMenu(){
        await this.driver.findElement(this.books).click();
    }

       async clickOnProducts(){
       await this.driver.findElement(this.dropdown).click();
    }
}
export {AddtoCart};