import { leftNavBarItems, leftNavBarLocators } from "../locators/nav-bar-locators";

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
}


export default NavBarActions;
