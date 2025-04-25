import BaseActions from "./base-actions";
import { adminPageLocators } from "../locators/admin-page-locators";
import { adminBarBodyItems, usersTableLocators, userDataPageLocators } from "../locators/admin-page-locators";
import AdminPageAssertions from "../assertions/admin-page-assertions";

const adminPageAsserions = new AdminPageAssertions();

class AdminPageActions extends BaseActions{
    getUserManagmentTab() {
        cy.get(adminPageLocators.adminTopBarTabItems).contains(adminBarBodyItems.userManagement).click();
    }
    
    getUsersFromDropDown() {
        cy.get(adminPageLocators.adminDropDownItems).contains(adminBarBodyItems.userInUserManagment).click()
    }

    editUserData() {
        cy.get(userDataPageLocators.userRowSelector)
        .contains('Admin')
        .parents(userDataPageLocators.userRowSelector)
        .find(userDataPageLocators.editIconSelector)
        .click();
    }

    changeUserPassword() {
        cy.get(userDataPageLocators.userChangePasswordChackBox).check({ force: true});
        cy.get(userDataPageLocators.userChangePasswordField).type('new_password123');
        cy.get(userDataPageLocators.userConfirmPasswordField).type('new_password123');
    }
    
    saveUserDataChanges() {
        cy.get(userDataPageLocators.userDataChangeSave).click();
    }

    clickAddButton() {
        cy.get(userDataPageLocators.userPageEditButtons).contains('Add').click();
    }

    addRandomEssUser(user) {
        cy.get(userDataPageLocators.userRoleDropdown).eq(0).click();
        cy.get(userDataPageLocators.userRoleOptionESS).contains('ESS').click();
        cy.get(userDataPageLocators.employeeNameInput).type('a').wait(1500);
        cy.get(userDataPageLocators.employeeNameOption).should('be.visible').first().click();
        cy.get(userDataPageLocators.userRoleDropdown).eq(1).click();
        cy.get(userDataPageLocators.statusOptionEnabled).contains('Enabled').click();
        cy.get(userDataPageLocators.usernameInput).eq(1).type(user.username);
        cy.get(userDataPageLocators.passwordInput).eq(0).type(user.password);
        cy.get(userDataPageLocators.passwordInput).eq(1).type(user.password);
        cy.get(userDataPageLocators.saveButton).click();
    }

    addRandomUsers(users) {
        users.forEach(user => {
            this.clickAddButton();
            this.addRandomEssUser(user);
            adminPageAsserions.verifyUserCreateSuccessfullyMessage();
        });
    }
    
}

export default AdminPageActions;
