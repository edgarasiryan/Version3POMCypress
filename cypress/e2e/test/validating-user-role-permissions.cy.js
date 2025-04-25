import BaseActions from "../actions/base-actions";
import LoginPageActions from "../actions/login-actions";
import LoginPageAssertions from "../assertions/login-assertions";
import NavBarActions from "../actions/nav-bar-actions";
import AdminPageActions from "../actions/admin-page-actions";
import AdminPageAssertions from "../assertions/admin-page-assertions";

describe('Test User Role Permissions Validation', () => {
    const baseActions = new BaseActions();
    const loginPageActions = new LoginPageActions();
    const loginPageAssertions = new LoginPageAssertions();
    const navBarActions = new NavBarActions();
    const adminPageAssertions = new AdminPageAssertions();
    const adminPageActions = new AdminPageActions();

    beforeEach(function () {
        baseActions.clearStorageAndCookies();
        baseActions.generateRandomUser();
        
        cy.readFile('cypress/fixtures/generatedUser.json').should('exist');
        
        cy.fixture('loginData').as('loginData');
        cy.fixture('generatedUser').as('generatedUser');

        baseActions.visit();
      });
    
      it('Test not allow ESS user to access Admin section', function () { 
        loginPageActions.login(this.loginData.username, this.loginData.password);
        loginPageAssertions.verifyLoginSuccess();
        navBarActions.navigateAdminTab();
        adminPageAssertions.verifyAdminPageIsOpen();
        adminPageActions.clickAddButton();
        adminPageActions.createRandomEssUser(this.generatedUser);
        adminPageAssertions.verifyUserCreateSuccessfullyMessage();
        navBarActions.logOut();
        loginPageAssertions.verifyLogoutSuccess();
        loginPageActions.login(this.generatedUser.username, this.generatedUser.password);
        loginPageAssertions.verifyLoginSuccess();

    });
    
  });
