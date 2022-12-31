// if variables aren't needed, just go with natural javascript without a class
export function answerOptionsEmpty(){
    cy.getByData("challenge-answer-0").should('not.be.checked')
    cy.getByData("challenge-answer-1").should('not.be.checked')
}

export function testingUrl(){
    return cy.location("pathname").should("eq", "/testing-your-first-application")
}

export function testingContinueCourse(){
    return cy.getByData("next-lesson-button").click()
}

export function answerIsTrue(){
    return cy.getByData("challenge-answer-0").click()
}

export function nextButtonDisplayed(){
    return cy.getByData("next-lesson-button").should("exist").click()
}

export function firstCourseUrl(){
    return cy.location("pathname").should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
}
