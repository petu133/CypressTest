export class Home { // the use of a class is nice when one needs variables
    featuresAllUniqueText(){
        cy.get('.grid').children()
        .then($els => {
            const setTexts = new Set();
            //... operator used to spread all yielded children elements out and store those to an iterable
            [...$els].forEach(el => setTexts.add(el.innerText)); //Set stores only unique values
            return setTexts;})
        .then(setTexts => {
            cy.get('.grid').children().its('length')
            .should('eq', setTexts.size) //if all the texts stored were different then the assertion should correctly pass 
         })
      return;
    }
    
    navigate() {
        cy.visit("http://localhost:3000")
    }

    getStartButton(){
        cy.getByData("course-0").find("a").eq(3).click()
    }

    testPath(){
        cy.location("pathname").should("eq", "/testing-your-first-application")
    }

    startCourseJourney(){
        cy.getByData("course-0").find("a").eq(3).click()
        return
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

    emailSuccess(){
        cy.getByData("email-input").fakeMail()
        cy.getByData("submit-button").click()
        cy.getByData("success-message")
        .should("exist").contains("@faked.com")
        return;
    }

    subsColorRgb(r, g, b){
        cy.get('.text-sm').should('have.css', 'color', 'rgb(175, 179, 199)')
    }
}