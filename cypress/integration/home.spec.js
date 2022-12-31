/// <reference types="Cypress" />

import { Home } from "../page-object/home"

describe('home', () => {
  const home = new Home();
  beforeEach(() =>{
    home.navigate();
  })

  context("main page display", () => {
    it('h1 contains the text required', () => {
      let titleDisplay = new Home();
      home.mainTitleDisplay("hero-heading", "Cypress")
    })

    it.only('features', () => {
      home.featuresMainTitle("What you'll learn")
      cy.get('.grid').children().each(($el, index, $list) =>{
        const currentText = $el.find('h3').text()
        const nextText = $el.next().find('h3').text()
        expect(currentText).to.not.equal(nextText)
      })
      home.featuresQuantity(6);
      home.featureText(0, "Prepare your Testing Mindset")
      home.featureText(3, "Learn Database Initialization & Seeding")
      
    })
  
    it('check that Courses are correctly displayed ', () => {
      cy.get("dt").eq(0).contains("4 Courses")
    })
  })

  context("courses", () => {
    it('navigate to course page', () => {
      cy.getByData("course-0").find("a").eq(3).click()  //here i need to add a page object
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
  })

  context("subscription display", () => {
    it('subscribe for updates', function() {
      cy.get('.text-sm').should('have.css', 'color', 'rgb(175, 179, 199)') //here i need to add a page object
      cy.get('.mt-4 > .mt-3 > .w-full').type("mail@fake.com{enter}")
      cy.get('#email-address', {timeout: 10000}).should('be.empty')
    })
  })
})  


