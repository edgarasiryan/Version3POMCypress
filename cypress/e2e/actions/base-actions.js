import { constants } from "../locators/base-locators";
class BaseActions { 

    visit() {
        cy.visit(constants.url);
      }

    clearStorageAndCookies() {
        cy.clearCookies();
        cy.clearLocalStorage();
    };

}

export default BaseActions;
