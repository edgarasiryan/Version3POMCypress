import BaseAssertions from "./base-assertions";
import { adminPageLocators, userDataPageLocators, usersTableLocators } from "../locators/admin-page-locators";
class AdminPageAssertions extends BaseAssertions {
    
    verifyAdminPageIsOpen () {
        super.verifyPageIsVisible(adminPageLocators.adminBreadcrumb).should('contain', 'Admin');
    }

    verifyUserExist() {
        cy.get(usersTableLocators.userNameCell).contains('Admin').should('exist');
    }

    verifyChangesPasswordIsValid() {
        cy.get(userDataPageLocators.userPasswordHint).should('contain', 'strong password');
    }

    verifyChangedSuccessfullyMessage() {
        cy.get(userDataPageLocators.userSuccessfullyMessage).should('contain', 'Successfully Updated');
    }

    verifyUserCreateSuccessfullyMessage() {
        cy.get(userDataPageLocators.userCreateSuccessfullyMessage).should('contain', 'Successfully Saved')  
    }

    searchAndVerifyUser(users) {
        users.forEach(user => {
            cy.get(userDataPageLocators.searchInput).clear().type(user.username); 
            cy.get(userDataPageLocators.searchButton).contains('Search').click();
            cy.get(userDataPageLocators.userList).should('contain', user.username);
            cy.get(`${userDataPageLocators.userRowSelector} .oxd-table-cell:contains("${user.username}")`)
            .closest('.oxd-table-row')
            .click();
            cy.get(userDataPageLocators.userListCells).should('contain', user.username);
            cy.get(userDataPageLocators.userListCells).should('contain', 'ESS');
            cy.get(userDataPageLocators.userListCells).should('contain', 'Enabled');
        });
    }
    
    
}


export default AdminPageAssertions;
