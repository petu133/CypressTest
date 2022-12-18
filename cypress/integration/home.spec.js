/// <reference types="Cypress" />

describe('empty spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000")
    cy.get("h1")
    .should("exist")
    .contains("Cypress")
  })
})

