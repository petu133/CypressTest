/// <reference types="Cypress" />

describe('course journey', () => {
    beforeEach(() =>{
      cy.visit("http://localhost:3000")
    })
  
    it("user's path go through course's lessons ", () => {
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
    })

    
})  