import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../support/pages/HomePage.js'
import CartPage from '../../support/pages/CartPage.js'
import ProdPage from '../../support/pages/ProdPage.js'

const homepage = new HomePage();
const cartpage = new CartPage();
const prodpage = new ProdPage();

/*When('',()=>{
})*/

Given('I am on demoblaze homepage',()=>{
    homepage.visit();
})



When('I click on Phones category',()=>{                             //testing categories
    homepage.phonesCat()
})
Then('I am able to see only phone products',()=>{
    homepage.firstCard().should('include.text','Samsung galaxy s6')
})

When('I click on Laptops category',()=>{
    homepage.laptopsCat()
})
Then('I am able to see only laptop products',()=>{
    homepage.firstCard().should('include.text','Sony vaio i5')
})

When('I click on Monitors category',()=>{
    homepage.monitorsCat()
})
Then('I am able to see only monitor products',()=>{
    homepage.firstCard().should('include.text','Apple monitor 24')
})



When('I click on an product',()=>{
    prodpage.prodEndpoint();
    homepage.product();
})
Then('I am able to see that product description and add it to cart',()=>{
    prodpage.productName().should('include.text','Samsung galaxy s6')
    prodpage.description().should('include.text','Product description')
    prodpage.addToCartBtn().should('be.visible')
})



When('I add a product to cart',()=>{
    prodpage.prodEndpoint();
    homepage.product();
    prodpage.addToCart();
    cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('Product added');         //asseting message has been sent
        })
    //cartpage.wait()
    
    cartpage.cartEndpoint();
    prodpage.cart();
    cartpage.wait()
})
Then('I am able to see that product on cart',()=>{
    cartpage.firstProduct().should('include.text','Samsung galaxy s6')
    cartpage.total().should('include.text','360')
})



When('I remove a product from cart',()=>{
    prodpage.prodEndpoint();
    homepage.product()
    prodpage.addToCart()

    cartpage.cartEndpoint();
    prodpage.cart()
    cartpage.total().should('include.text','360')
    cartpage.delete()
    cartpage.wait()
})
Then('Its price should be subtracted from total',()=>{
    
    cy.fixture('purchase').as('purchase')
    cy.get('@purchase').then(purchase=>{
        cartpage.placeOrder()
        cartpage.waitElement(cartpage.inputName())
            cartpage.name(purchase.name)
        cartpage.waitElement(cartpage.inputCreditCard())
            cartpage.card(purchase.card)
        cartpage.year(purchase.year)
    })
    
    cartpage.purchase()
    //cartpage.wait()
    cartpage.purchaseMsg().should('include.text','Amount: 0 USD')
})



When('I click on buy cart',()=>{
    prodpage.prodEndpoint();
    homepage.product()
    prodpage.addToCart()

    cartpage.cartEndpoint();
    prodpage.cart()
    cartpage.placeOrder()
})
Then('I am able to fill with data and buy',()=>{
    cy.fixture('purchase').as('purchase')
    cartpage.orderTitle().should('include.text', 'Place order')
    cy.get('@purchase').then(purchase=>{
        cartpage.waitElement(cartpage.inputName())
            cartpage.name(purchase.name)
        cartpage.country(purchase.country)
        cartpage.city(purchase.city)
        cartpage.waitElement(cartpage.inputCreditCard())
            cartpage.card(purchase.card)
        cartpage.month(purchase.month)
        cartpage.year(purchase.year)
    })
    
    cartpage.purchase() 
})
Then('To purchase successfully',()=>{ 
    cartpage.thankYouMsg().should('be.visible')
    cartpage.thankYouMsg().should('include.text', 'Thank you for your purchase!')
})