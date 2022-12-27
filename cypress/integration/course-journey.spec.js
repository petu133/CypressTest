/// <reference types="Cypress" />

import { Home } from "../page-object/home"

describe('course journey', () => {
  const home = new Home();
    beforeEach(() =>{
      home.navigate();
    })
  
    it("user's path go through course's lessons ", () => {
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview")
        cy.getByData("challenge-answer-0").should('not.be.checked')
        cy.getByData("challenge-answer-1").should('not.be.checked')
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
    })

    
})  