import BaseActions from "../actions/base-actions";
import LoginPageActions from "../actions/login-actions";
import NavBarActions from "../actions/nav-bar-actions";
import AdminPageActions from "../actions/admin-page-actions";
import AdminPageAssertions from "../assertions/admin-page-assertions";
import LoginPageAssertions from "../assertions/login-assertions";

describe('Test Bulk User Creation and Validation', () => {
    const baseActions = new BaseActions();
    const loginPageActions = new LoginPageActions();
    const loginPageAssertions = new LoginPageAssertions();
    const navBarActions = new NavBarActions();
    const adminPageAssertions = new AdminPageAssertions();
    const adminPageActions = new AdminPageActions();

    beforeEach(function () {
        baseActions.clearStorageAndCookies();
        baseActions.generateMultipleUsers(3);

        cy.readFile('cypress/fixtures/generatedUsers.json').should('exist');

        cy.fixture('loginData').as('loginData');
        cy.fixture('generatedUsers').as('generatedUsers');
        baseActions.visit();
      });
    
      it('Test create multiple users and validate their details', function () { 
        loginPageActions.login(this.loginData.username, this.loginData.password);
        loginPageAssertions.verifyLoginSuccess();
        navBarActions.navigateAdminTab();
        adminPageAssertions.verifyAdminPageIsOpen();
        adminPageActions.getUserManagmentTab();
        adminPageActions.addRandomUsers(this.generatedUsers);
        navBarActions.navigateAdminTab();
        adminPageAssertions.verifyAdminPageIsOpen();
        adminPageAssertions.searchAndVerifyUser(this.generatedUsers)
    });

  });
