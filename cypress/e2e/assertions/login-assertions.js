import { homePageLocators } from "../locators/home-page-locators"; 

class LoginPageAssertions {
    
    verifyLoginSuccess() {
        cy.get(homePageLocators.userDropdown).should('be.visible');
        cy.get(homePageLocators.profileAvatar).should('be.visible');
    }

}

export default LoginPageAssertions;
