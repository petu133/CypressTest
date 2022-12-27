export class Home {
    navigate() {
        cy.visit("http://localhost:3000")
    }

    mainTitleDisplay(mainTitleSelector, mainTitleText){
        cy.getByData(mainTitleSelector)
        .should("exist")
        .contains(mainTitleText).and('have.css', 'text-decoration-line', 'none')
    }
}