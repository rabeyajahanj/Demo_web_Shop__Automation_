import {RegisterPage} from "../pages/registerPage.js";

//register
const result = new RegisterPage();
 await result.openBrowser("https://demowebshop.tricentis.com/");
 await result.clickRegisterLink();
 await result.clickGender();
 await result.enterFirstName("Isaac");
 await result.enterLastName("Rintaraou");
 await result.enterEmail("rinta17004@gmail.com");
 await result.enterPassword("password123");
 await result.enterConfirmPassword("password123");
 await result.enterRegisterButton();
 await result.enterLogoutButton();
await result.closeBrowser();
