import BaseActions from "../actions/base-actions";
import LoginPageActions from "../actions/login-actions";
import LoginPageAssertions from "../assertions/login-assertions";
import NavBarActions from "../actions/nav-bar-actions";
import AdminPageActions from "../actions/admin-page-actions";
import AdminPageAssertions from "../assertions/admin-page-assertions";

describe('Test Password Reset via Admin Interface', () => {
    const baseActions = new BaseActions();
    const loginPageActions = new LoginPageActions();
    const loginPageAssertions = new LoginPageAssertions();
    const navBarActions = new NavBarActions();
    const adminPageAssertions = new AdminPageAssertions();
    const adminPageActions = new AdminPageActions();

    beforeEach(function () {
        baseActions.clearStorageAndCookies();
        cy.fixture('loginData').as('loginData');

        baseActions.visit();
      });
    
      it('Test Allow admin to reset a user password and show success message', function () { 
        loginPageActions.login(this.loginData.username, this.loginData.password);
        loginPageAssertions.verifyLoginSuccess();
        navBarActions.navigateAdminTab();
        adminPageAssertions.verifyAdminPageIsOpen();
        adminPageActions.getUserManagmentTab();
        adminPageActions.getUsersFromDropDown();
        adminPageAssertions.verifyUserExist();
        adminPageActions.editUserData();
        adminPageActions.changeUserPassword();
        adminPageAssertions.verifyChangesPasswordIsValid();
        adminPageActions.saveUserDataChanges();
        adminPageAssertions.verifyChangedSuccessfullyMessage();
    });
    
  });