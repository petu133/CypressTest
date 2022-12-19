/// <reference types="Cypress" />

describe('empty spec', () => {
  it('h1 contains the text required', () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-test="hero-heading"]')
    .should("exist")
    .contains("Cypress")
  })

  it.only('check that Courses are correctly displayed ', () => {
    cy.visit("http://localhost:3000")
    cy.get("dt").eq(0).contains("4 Courses")
  })

})  


