/// <reference types="Cypress" />

import { Home } from "../page-object/home"
import { answerIsTrue, answerOptionsEmpty, nextButtonDisplayed, firstCourseUrl } from "../page-object/courses"
describe('course journey', () => {
  const home = new Home();
    beforeEach(() =>{
      home.navigate();
    })
  
    it("user's path go through course's lessons ", () => {
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        answerOptionsEmpty();
        answerIsTrue();
        nextButtonDisplayed();
        firstCourseUrl();
    })

    
})  