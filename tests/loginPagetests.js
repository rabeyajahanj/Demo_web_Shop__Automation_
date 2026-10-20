import {LoginPage} from "../pages/loginPage.js";

describe("Login page load", function(){

    it("it should be the Second test", async function (){
     //login
        const result = new LoginPage();
        await result.openBrowser("https://demowebshop.tricentis.com/");
        await result.clickLoginLink();
        await result.enterEmail("rinta1784@gmail.com");
        await result.enterPassword("password123");
        await result.ClickRememberMe();
        await result.ClickLoginButton();
        await result.closeBrowser();

    })

})
