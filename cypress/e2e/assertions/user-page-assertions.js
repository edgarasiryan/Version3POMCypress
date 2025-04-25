import BaseAssertions from "./base-assertions";
import { leftNavBarLocators, leftNavBarItems } from "../locators/nav-bar-locators";
import { adminPageLocators, adminBarBodyItems } from "../locators/admin-page-locators";

class UserPageAssertions extends BaseAssertions {

    verifyAdminItemNotVisible() {
        cy.contains(leftNavBarItems.adminMenuItem)
        .should('not.exist')
    }

    verifyUserManagmentNotVisible() {
        cy.contains(adminBarBodyItems.userManagement)
        .should('not.exist');
    }

}

export default UserPageAssertions;
