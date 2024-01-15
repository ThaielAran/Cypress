var pageLocators={
    productName:'body:nth-child(2) div.product-content.product-wrap.clearfix.product-deatil:nth-child(6) div.row div.col-md-7.col-sm-12.col-xs-12 > h2.name:nth-child(1)',
    addToCartBtn:'div.product-content.product-wrap.clearfix.product-deatil:nth-child(6) div.row div.col-md-7.col-sm-12.col-xs-12 div.row:nth-child(7) div.col-sm-12.col-md-6.col-lg-6 > a.btn.btn-success.btn-lg',
    description: '#more-information',
    cartBtn: '#navbarExample > ul > li:nth-child(4) > a',
    homeBtn: 'nav.navbar.navbar-toggleable-md.bg-inverse:nth-child(6) div.container div.navbar-collapse ul.navbar-nav.ml-auto li.nav-item.active:nth-child(1) > a.nav-link'
}
class ProdPage{
    productName(){return cy.get(pageLocators.productName)}
    addToCartBtn(){return cy.get(pageLocators.addToCartBtn)}
    description(){return cy.get(pageLocators.description)}
    cartBtn(){return cy.get(pageLocators.cartBtn)}
    homeBtn(){return cy.get(pageLocators.homeBtn)}

    prodEndpoint(){return cy.intercept('GET','/prod/', (req) => {
        expect(req.statusCode).to.eq(200)
      })}

    addToCart(){return this.addToCartBtn().click()}
    cart(){return this.cartBtn().click()}
    home(){return this.homeBtn().click()}
}
export default ProdPage;