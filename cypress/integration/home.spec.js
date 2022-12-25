/// <reference types="Cypress" />

describe('home', () => {
  beforeEach(() =>{
    cy.visit("http://localhost:3000")
  })

  context("main page display", () => {
    it('h1 contains the text required', () => {
      cy.getByData("hero-heading")
      .should("exist")
      .contains("Cypress")
    })

    it.only('features', () => {
      cy.get('.mx-auto > .mt-2').should('have.text', "What you'll learn")
      cy.get('.grid').children().each(($el, index, $list) =>{
        const text = $el.find('h3').text()
        const text1 = $el.next().find('h3').text()
        expect(text).to.not.equal(text1)
      })
      cy.get('.grid').children().should('have.length', 6).and('be.visible')
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
    it('subscribe for updates', function() {
      cy.get('.text-sm').should('have.css', 'color', 'rgb(175, 179, 199)')
      cy.get('.mt-4 > .mt-3 > .w-full').type("mail@fake.com{enter}")
      cy.get('#email-address', {timeout: 10000}).should('be.empty')
    })
  })
})  


