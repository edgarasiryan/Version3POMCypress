import { constants } from "../locators/base-locators";
import { faker } from '@faker-js/faker';

class BaseActions { 

    visit() {
        cy.visit(constants.url);
      }

    clearStorageAndCookies() {
        cy.clearCookies();
        cy.clearLocalStorage();
    };

    generateRandomUser() {
        const user = {
          username: faker.internet.userName(),
          password: faker.internet.password(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
        };
        cy.writeFile('cypress/fixtures/generatedUser.json', user);
      }
      
      
}

export default BaseActions;
