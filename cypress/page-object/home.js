export class Home {
    navigate() {
        cy.visit("http://localhost:3000")
    }

    mainTitleDisplay(mainTitleSelector, mainTitleText){
        cy.getByData(mainTitleSelector)
        .should("exist")
        .contains(mainTitleText).and('have.css', 'text-decoration-line', 'none')
    }

    featuresQuantity(featuresNumber){
        let number = parseInt(featuresNumber)
        cy.get('.grid').children().should('have.length', number).and('be.visible')
        // "." captures the class name
    }
}