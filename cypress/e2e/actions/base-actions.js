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

      generateMultipleUsers(numUsers) {
        const users = [];
      
        for (let i = 0; i < numUsers; i++) {
            const user = {
                username: faker.internet.userName(),
                password: faker.internet.password() + 2,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
            };
            users.push(user);
        }
        
        cy.writeFile('cypress/fixtures/generatedUsers.json', users);
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

    getRandomLetter() {
      const letters = 'ABCDEFGabcdefg';
      const randomIndex = Math.floor(Math.random() * letters.length);
      return String(letters[randomIndex]);
  }

}

export default BaseActions;
