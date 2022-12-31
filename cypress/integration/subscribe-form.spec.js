/// <reference types="Cypress" />

import { Home } from "../page-object/home"

describe('subscribe', () => {
  const home = new Home();
    beforeEach(() =>{
      home.navigate();
    })
  
    it('allowing a valid user to subscribe successfully using an email address', () => {
      cy.getByData("email-input").type("tom@aol.com") //must search for a method or external library to generate ramdom ema
      cy.getByData("submit-button").click()
      cy.getByData("success-message")
      .should("exist").contains("tom@aol.com")
    })
})  