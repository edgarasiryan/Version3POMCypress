import BaseActions from "./base-actions";
import { loginPageLocators } from "../locators/login-page-locators";

class LoginPageActions extends BaseActions {
  
    typeUsername(username) {
      cy.get(loginPageLocators.usernameField).type(username);
    }
  
    typePassword(password) {
      cy.get(loginPageLocators.passwordField).type(password);
    }
  
    clickSubmit() {
      cy.get(loginPageLocators.submitButton).click();
    }
  
    login(username, password) {
      this.typeUsername(username);
      this.typePassword(password);
      this.clickSubmit();
    }
  }
  
export default LoginPageActions;
