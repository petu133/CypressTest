/// <reference types="Cypress" />

import { Home } from "../page-object/home"

describe('home', () => {
  const home = new Home();
  beforeEach(() =>{
    home.navigate();
  })

  context("main page display", () => {
    it('h1 contains the text required', () => { 
      home.mainTitleDisplay("hero-heading", "Cypress")
    })

    it('features', () => {
      home.featuresMainTitle("What you'll learn")
      home.featuresAllUniqueText();
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
      home.getStartButton();
      home.testPath();
    })
  })

  context("subscription display", () => {
    it.only('subscribe for updates', function() {
      home.subsColorRgb() //This need to be completed
      cy.get('.mt-4 > .mt-3 > .w-full').type("mail@fake.com{enter}")
      cy.get('#email-address', {timeout: 10000}).should('be.empty')
    })
  })
})  


