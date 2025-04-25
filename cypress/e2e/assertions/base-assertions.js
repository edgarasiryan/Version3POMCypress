class BaseAssertions {
    
    verifyPageIsVisible(pageIdentifyLocator) {
        return cy.get(pageIdentifyLocator).should('be.visible')
    }
}

export default BaseAssertions;
