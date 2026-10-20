import {RegisterPage} from "../pages/registerPage.js";


// describe("allure report generate", function(){

//     it("it should be the first test", async function (){
 
//     })//mocha understand that this test report need to run

// })
//these two line extra for allure report generate

describe("register page Load", function(){

    it("it should be the first test", async function (){
    //register
      const result = new RegisterPage();
    await result.openBrowser("https://demowebshop.tricentis.com/");
    await result.clickRegisterLink();
    await result.clickGender();
    await result.enterFirstName("Isaac");
    await result.enterLastName("Rintaraou");
    await result.enterEmail("rinta11004@gmail.com");
    await result.enterPassword("password123");
    await result.enterConfirmPassword("password123");
    await result.enterRegisterButton();
    await result.enterLogoutButton();
    await result.closeBrowser();

    })
})
