import { homePageLocators } from "../locators/home-page-locators"; 
import { loginPageLocators } from "../locators/login-page-locators";

class LoginPageAssertions {
    
    verifyLoginSuccess() {
        cy.get(homePageLocators.userDropdown).should('be.visible');
        cy.get(homePageLocators.profileAvatar).should('be.visible');
    }

    verifyLogoutSuccess() {
        cy.get(loginPageLocators.loginButton).should('be.visible')
    }
}

export default LoginPageAssertions;
