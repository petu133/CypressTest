/// <reference types="Cypress" />

describe('empty spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-test="hero-heading"]')
    .should("exist")
    .contains("Cypress")
  })
})

