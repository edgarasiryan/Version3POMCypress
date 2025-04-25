import BaseActions from "../actions/base-actions";
import LoginPageActions from "../actions/login-actions";
import LoginPageAssertion from "../assertions/login-assertions";

describe('Login Functionality Tests', () => {
    const baseActions = new BaseActions();
    const loginPageActions = new LoginPageActions();
    const loginPageAssertion = new LoginPageAssertion();

    beforeEach(function () {
        baseActions.clearStorageAndCookies();
        cy.fixture('loginData').as('loginData');

        baseActions.visit();
      });
    
      it('Test Logining with valid data', function () { 
        loginPageActions.typeUsername(this.loginData.username);
        loginPageActions.typePassword(this.loginData.password);
        loginPageActions.clickSubmit();
        loginPageAssertion.verifyLoginSuccess();
    });
    
  });
