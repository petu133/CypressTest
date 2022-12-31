/// <reference types="Cypress" />

import { Home } from "../page-object/home"
import { answerIsTrue, answerOptionsEmpty, nextButtonDisplayed, firstCourseUrl, testingUrl, testingContinueCourse } from "../page-object/courses"
describe('course journey', () => {
  const home = new Home();
    beforeEach(() =>{
      home.navigate();
    })
  
    it("user's path go through course's lessons ", () => {
        home.startCourseJourney();
        testingUrl();
        testingContinueCourse();
        answerOptionsEmpty();
        answerIsTrue();
        nextButtonDisplayed();
        firstCourseUrl();
    })

    
})  