/// <reference types="Cypress" />

import { Home } from "../page-object/home"

describe('subscribe', () => {
  const home = new Home();
    beforeEach(() =>{
      home.navigate();
    })
  
    it.only('allowing a valid user to subscribe successfully using an email address', () => {
      home.emailSuccess();
    })
})  