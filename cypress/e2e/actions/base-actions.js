import { constants } from "../locators/base-locators";
import { faker } from '@faker-js/faker';

class BaseActions { 

    visit(path = '') {
        cy.visit(constants.url + path);
      }

    clearStorageAndCookies() {
        cy.clearCookies();
        cy.clearLocalStorage();
    };

    generateRandomUser() {
        const user = {
          username: faker.internet.userName(),
          password: faker.internet.password() + 2,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
        };
        cy.writeFile('cypress/fixtures/generatedUser.json', user);
      }
      
    verifyForbiddenError(path) {
      cy.request({
        method: 'GET',
        url: path,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    }
}

export default BaseActions;
