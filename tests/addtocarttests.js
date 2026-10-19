import {AddtoCart} from "../pages/addTocart.js";

const result = new AddtoCart();
await result.openBrowser("https://demowebshop.tricentis.com/")
await result.clickonBookMenu();
await result.clickOnProducts();