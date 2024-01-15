import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../support/pages/HomePage.js'
const homepage = new HomePage();

Given('I visit demoblaze homepage',()=>{
    homepage.visit();
})

When('I advance three times on slides',()=>{
    homepage.next()
    homepage.wait()
    homepage.next()
    homepage.wait()
    homepage.next()
})

When('I wait for slides to move automatically three times',()=>{
    homepage.firstSlide().should('be.visible')
    homepage.secondSlide().should('be.visible')
    homepage.thirdSlide().should('be.visible')
    homepage.firstSlide().should('be.visible')
})

When('I go back three times on slides',()=>{
    homepage.prev()
    homepage.wait()
    homepage.prev()
    homepage.wait()
    homepage.prev()
})

Then('Im back in the first slide',()=>{
    homepage.firstSlide().should('be.visible')
})