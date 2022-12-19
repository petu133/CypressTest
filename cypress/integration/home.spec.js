/// <reference types="Cypress" />

describe('empty spec', () => {
  beforeEach(() =>{
    cy.visit("http://localhost:3000")
  })

  it('h1 contains the text required', () => {
    cy.get('[data-test="hero-heading"]')
    .should("exist")
    .contains("Cypress")
  })

  it('check that Courses are correctly displayed ', () => {
    cy.get("dt").eq(0).contains("4 Courses")
  })

})  


