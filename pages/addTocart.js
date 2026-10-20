import { Builder, By } from "selenium-webdriver";
import { Base } from "./base.js";

 class AddtoCart extends Base{
    constructor() {
     super();
     this.books = By.xpath("//a[@href='/books']");
     this.dropdown = By.xpath("//select[@id='products-orderby']/option[text()='Name: A to Z']");
     this.cart = By.xpath("//input[@value='Add to cart']");
     this.shoppingcart = By.xpath("//a[@href='/cart']");
     this.termsnconditions = By.id("termsofservice");
     this.checkout = By.id("checkout");
    }
        async clickonBookMenu(){
        await this.driver.findElement(this.books).click();
    }

       async clickOnProducts(){
       await this.driver.findElement(this.dropdown).click();
    }

    async ClicktheProducts(){
        console.log("Add to cart successfully")
        await this.driver.findElement(this.cart).click();
    }

    async GoToTheCart(){
        console.log("Redirect TO The Cart page");
        await this.driver.findElement(this.shoppingcart).click();
    }

    async CickOnCheckBox(){
        await this.driver.findElement(this.termsnconditions).click();
    }

    async CheckOutButton(){
        console.log("Successfully checkout the product");
        await this.driver.findElement(this.checkout).click();
    }
}
export {AddtoCart};