/// <reference types="Cypress" />

describe('home', () => {
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
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
  })

  context("subscription display", () => {
    it.only('subscribe for updates', function() {
      cy.get('.text-sm').should('have.css', 'color', 'rgb(175, 179, 199)')
      cy.get('.mt-4 > .mt-3 > .w-full').as('x').type("mail@fake.com{enter}")
    })
  })
})  


