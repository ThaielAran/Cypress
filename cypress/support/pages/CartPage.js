var pageLocators={
    title: '#page-wrapper > div > div.col-lg-8 > h2',
    firstProduct:'div.row div.col-lg-8 div.table-responsive:nth-child(2) table.table.table-bordered.table-hover.table-striped tbody:nth-child(2) tr.success > td:nth-child(2)',
    delete:'div.row div.col-lg-8 div.table-responsive:nth-child(2) table.table.table-bordered.table-hover.table-striped tbody:nth-child(2) tr.success td:nth-child(4) > a:nth-child(1)',
    total:'#totalp',
    placeOrderBtn: '#page-wrapper > div > div.col-lg-1 > button',
        orderTitle:'#orderModalLabel',
        inputName:'#name',
        inputCountry:'#country',
        inputCity:'#city',
        inputCreditCard:'#card',
        inputMonth:'#month',
        inputYear:'#year',
        purchaseBtn:'#orderModal > div > div > div.modal-footer > button.btn.btn-primary',
        purchaseMsg:'body > div.sweet-alert.showSweetAlert.visible > p',
        thankYouMsg:'body > div.sweet-alert.showSweetAlert.visible > h2'
}
class CartPage{
    title(){return cy.get(pageLocators.title)}
    firstProduct(){return cy.get(pageLocators.firstProduct)}
    deleteBtn(){return cy.get(pageLocators.delete)}
    total(){return cy.get(pageLocators.total)}
    placeOrderBtn(){return cy.get(pageLocators.placeOrderBtn)}
        orderTitle(){return cy.get(pageLocators.orderTitle)}
        inputName(){return cy.get(pageLocators.inputName)}
        inputCountry(){return cy.get(pageLocators.inputCountry)}
        inputCity(){return cy.get(pageLocators.inputCity)}
        inputCreditCard(){return cy.get(pageLocators.inputCreditCard)}
        inputMonth(){return cy.get(pageLocators.inputMonth)}
        inputYear(){return cy.get(pageLocators.inputYear)}
        purchaseBtn(){return cy.get(pageLocators.purchaseBtn)}
        purchaseMsg(){return cy.get(pageLocators.purchaseMsg)}
        thankYouMsg(){return cy.get(pageLocators.thankYouMsg)}
    
    wait(){return cy.wait(1500)}                                //implicit wait used for CSS/load timing
    waitElement(element){return element.should('be.visible')}

    cartEndpoint(){return cy.intercept('GET','/cart/', (req) => {
        expect(req.statusCode).to.eq(200)
      })}
   

    placeOrder(){return this.placeOrderBtn().click()}
        name(text){return this.inputName().type(text)}
        country(text){return this.inputCountry().type(text)}
        city(text){return this.inputCity().type(text)}
        card(text){return this.inputCreditCard().type(text)}
        month(text){return this.inputMonth().type(text)}
        year(text){return this.inputYear().type(text)}
        purchase(){return this.purchaseBtn().click()}
    delete(){return this.deleteBtn().click()}
}
export default CartPage;