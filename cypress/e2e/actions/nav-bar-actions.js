import { leftNavBarItems, leftNavBarLocators, topNavBarLocators } from "../locators/nav-bar-locators";

class NavBarActions {
    navigateToSection(itemName) {
        cy.get(leftNavBarLocators.menuItemText)
          .contains(itemName)
          .closest(leftNavBarLocators.menuItemLink)
          .click();
    }

    navigateAdminTab() {
        this.navigateToSection(leftNavBarItems.adminMenuItem);
    }

    logOut() {
        cy.get(topNavBarLocators.userDropDown).click();
        cy.get(topNavBarLocators.userDropDownLinks).contains('Logout').click()
    }
}


export default NavBarActions;
