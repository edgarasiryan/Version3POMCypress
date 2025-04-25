import { adminPageLocators } from "../locators/admin-page-locators";
import { adminBarBodyItems, usersTableLocators, userDataPageLocators } from "../locators/admin-page-locators";

class AdminPageActions{
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
}

export default AdminPageActions;
