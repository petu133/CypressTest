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

    featuresMainTitle(title){
        cy.get('.mx-auto > .mt-2').contains(title)
    }

    featureText(index, desiredText){
        console.log("THE TYPE IS : " + typeof index); // prints what the type of the variable passed is
        let number = index + 1; // because the yielded elemnt is 1 based, not zero based
        cy.get(':nth-child('+ number +') > .flow-root > .-mt-6 > .mt-8').should('have.text', desiredText)
    }
}