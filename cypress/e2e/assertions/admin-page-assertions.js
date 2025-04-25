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
    
}

export default AdminPageAssertions;
