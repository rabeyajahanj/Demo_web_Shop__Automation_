import {AddtoCart} from "../pages/addTocart.js";

describe("Add to cart", function(){

    it("it should be the Third test", async function (){
      const result = new AddtoCart();
        await result.openBrowser("https://demowebshop.tricentis.com/")
        await result.clickonBookMenu();
        await result.clickOnProducts();
        await result.ClicktheProducts();
        await result.GoToTheCart();  
        await result.CickOnCheckBox();
        await result.CheckOutButton();
         await result.closeBrowser();
    })

})
