import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../support/pages/HomePage.js'
import CartPage from '../../support/pages/CartPage.js'

const homepage = new HomePage();
const cartpage = new CartPage();

Given('I visit demoblaze homepage',()=>{
    homepage.visit();
})

/*When('',()=>{
})*/


When('I navigate to Contact',()=>{
    homepage.contact();
})
Then('I am able to write a message',()=>{
    homepage.msgTitle().should('include.text', 'New message')
    cy.fixture('message').as('msg')                                     //using a fixture to fill in recipients
    cy.get("@msg").then(msg=>{
        homepage.typeEmail(msg.email)
        homepage.typeName(msg.name)
        homepage.typeMsg(msg.body)
        homepage.sendMsg()
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Thanks for the message!!');         //asseting message has been sent
            })
    })
})



When('I navigate to AboutUs',()=>{
    homepage.aboutUs();
})
Then('I can see a video',()=>{
    homepage.playBtn().should('be.visible')
    homepage.play()
    homepage.close()
})



When('I navigate to Cart',()=>{
    cartpage.cartEndpoint();
    homepage.cart(); 
})
Then('I can see my added products',()=>{
    cartpage.title().should('be.visible')
    cartpage.title().should('include.text', 'Products')
    cartpage.placeOrderBtn().should('be.visible')
})



When('I navigate to Sign up',()=>{
    homepage.signUp();
})
Then('I am able to create a user with username and password',()=>{
    homepage.signUpTitle().should('include.text', 'Sign up')
    cy.fixture('users').as('users')                                     //using a fixture to fill in recipients
    cy.get("@users").then(users=>{
        homepage.waitElement(homepage.inputUsername())
        homepage.inputUsername().should('be.visible')
        homepage.typeUsername(users.name)
        homepage.waitElement(homepage.inputPassword())
        homepage.inputPassword().should('be.visible')
        homepage.typePassword(users.password)
        homepage.signinUp()
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Sign up successful.');         //asseting user was created
            })
    })
})



When('I navigate to Login',()=>{
    homepage.logIn();
})
Then('I am able to send username and password to log in',()=>{
    homepage.logInTitle().should('include.text', 'Log in')
    cy.fixture('users').as('users')                                     //using a fixture to fill in recipients
    cy.get("@users").then(users=>{
        homepage.logOutBtn().should('not.be.visible')
        homepage.waitElement(homepage.inputLoginUser())
        homepage.inputLoginUser().should('be.visible')
        homepage.typeUser(users.name)
        homepage.waitElement( homepage.inputLoginPass())
        homepage.inputLoginPass().should('be.visible')
        homepage.typePass(users.password)
        homepage.loggingIn()
        homepage.logOutBtn().should('be.visible')
        homepage.nameOfUser().should('include.text', 'Welcome Leiaht')
    })
})