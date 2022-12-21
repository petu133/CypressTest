/// <reference types="Cypress" />

describe('empty spec', () => {
  beforeEach(() =>{
    cy.visit("http://localhost:3000")
  })

  context("hero", () => {
    it('h1 contains the text required', () => {
      cy.getByData("hero-heading")
      .should("exist")
      .contains("Cypress")
    })
  
    it('check that Courses are correctly displayed ', () => {
      cy.get("dt").eq(0).contains("4 Courses")
    })
  })

  context("courses", () => {
    it('navigate to course page', () => {
      cy.getByData("course-0").find("a").eq(3).click()
    })
  })

})  


