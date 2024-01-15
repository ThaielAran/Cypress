var pageLocators = {
    contactBtn: '#navbarExample > ul > li:nth-child(2) > a',
        msgTitle:'#exampleModalLabel',
        inputEmail:'#recipient-email',
        inputName:'#recipient-name',
        inputMsg:'#message-text',
        sendMsgBtn:'body.modal-open:nth-child(2) div.modal.fade.show:nth-child(1) div.modal-dialog div.modal-content div.modal-footer > button.btn.btn-primary:nth-child(2)',

    aboutUsBtn: '#navbarExample > ul > li:nth-child(3) > a',
        playBtn:'body.modal-open:nth-child(2) div.modal.fade.show:nth-child(4) div.modal-dialog div.modal-content div.modal-body form:nth-child(1) div.form-group div.video-js.vjs-paused.example-video-dimensions.vjs-controls-enabled.vjs-workinghover.vjs-v7.vjs-user-active > button.vjs-big-play-button',
        closeBtn:'#videoModal > div > div > div.modal-footer > button',

    cartBtn: '#navbarExample > ul > li:nth-child(4) > a',
    logInBtn: '#login2',
        inputLoginUser:'#loginusername',
        inputLoginPass:'#loginpassword',
        login:'body.modal-open:nth-child(2) div.modal.fade.show:nth-child(3) div.modal-dialog div.modal-content div.modal-footer > button.btn.btn-primary:nth-child(2)',
        logInTitle:'#logInModalLabel',
        logOutBtn:'#logout2',
        nameOfUser:'#nameofuser',
        
    signUpBtn: '#signin2',
        inputUsername:'#sign-username',
        inputPassword:'#sign-password',
        signUp:'body.modal-open:nth-child(2) div.modal.fade.show:nth-child(2) div.modal-dialog div.modal-content div.modal-footer > button.btn.btn-primary:nth-child(2)',
        signUpTitle:'#signInModalLabel',

    phonesCatBtn: '//a[contains(text(),"Phones" )]',
    laptopsCatBtn: '//a[contains(text(),"Laptops")]',
    monitorsCatBtn: '//a[contains(text(),"Monitors")]',

    firstCard: 'div.container:nth-child(6) div.row div.col-lg-9 div.row:nth-child(1) div.col-lg-4.col-md-6.mb-4:nth-child(1) div.card.h-100 div.card-block:nth-child(2) h4.card-title:nth-child(1) > a.hrefch',

    carouselLeft: '#carouselExampleIndicators > a.carousel-control-prev > span.carousel-control-prev-icon',
    carouselRight: '#carouselExampleIndicators > a.carousel-control-next > span.carousel-control-next-icon',
    firstSlide: 'nav.navbar.navbar-toggleable-md.bg-inverse:nth-child(5) div.lg-9.md-6 div.carousel.slide div.carousel-inner div.carousel-item.active:nth-child(1) > img.d-block.img-fluid',
    secondSlide:'nav.navbar.navbar-toggleable-md.bg-inverse:nth-child(5) div.lg-9.md-6 div.carousel.slide div.carousel-inner div.carousel-item.active:nth-child(2) > img.d-block.img-fluid',
    thirdSlide:'nav.navbar.navbar-toggleable-md.bg-inverse:nth-child(5) div.lg-9.md-6 div.carousel.slide div.carousel-inner div.carousel-item.active:nth-child(3) > img.d-block.img-fluid'
}
class HomePage{

    visit(){
        cy.visit('/')
    }

    contactBtn(){return cy.get(pageLocators.contactBtn)}
        msgTitle(){return cy.get(pageLocators.msgTitle)}
        inputEmail(){return cy.get(pageLocators.inputEmail)}
        inputName(){return cy.get(pageLocators.inputName)}
        inputMsg(){return cy.get(pageLocators.inputMsg)}
        sendMsgBtn(){return cy.get(pageLocators.sendMsgBtn)}

    aboutUsBtn(){return cy.get(pageLocators.aboutUsBtn)}
        playBtn(){return cy.get(pageLocators.playBtn)}
        closeBtn(){return cy.get(pageLocators.closeBtn)}
    cartBtn(){return cy.get(pageLocators.cartBtn)}
    logInBtn(){return cy.get(pageLocators.logInBtn)}
        inputLoginUser(){return cy.get(pageLocators.inputLoginUser)}
        inputLoginPass(){return cy.get(pageLocators.inputLoginPass)}
        loginBtn(){return cy.get(pageLocators.login)}
        logInTitle(){return cy.get(pageLocators.logInTitle)}
        logOutBtn(){return cy.get(pageLocators.logOutBtn)}
        nameOfUser(){return cy.get(pageLocators.nameOfUser)}

    signUpHeaderBtn(){return cy.get(pageLocators.signUpBtn)}
        inputUsername(){return cy.get(pageLocators.inputUsername)}
        inputPassword(){return cy.get(pageLocators.inputPassword)}
        signUpBtn(){return cy.get(pageLocators.signUp)}
        signUpTitle(){return cy.get(pageLocators.signUpTitle)}


    phones(){return cy.xpath(pageLocators.phonesCatBtn)}
    laptops(){return cy.xpath(pageLocators.laptopsCatBtn)}
    monitors(){return cy.xpath(pageLocators.monitorsCatBtn)}
    
    firstCard(){return cy.get(pageLocators.firstCard)}
    carouselLeft(){return cy.get(pageLocators.carouselLeft,{timeout:6500})}
    carouselRight(){return cy.get(pageLocators.carouselRight,{timeout:6500})}
    firstSlide(){return cy.get(pageLocators.firstSlide,{timeout:7000})}
    secondSlide(){return cy.get(pageLocators.secondSlide,{timeout:7000})}
    thirdSlide(){return cy.get(pageLocators.thirdSlide,{timeout:7000})}



    next(){return this.carouselRight().click()}
    prev(){return this.carouselLeft().click()}

    wait(){return cy.wait(1500)}                    //implicit wait for sliding carousel
    waitElement(element){return element.should('be.visible')}

    contact(){return this.contactBtn().click()}
        typeEmail(text){return this.inputEmail().type(text)}
        typeName(text){return this.inputName().type(text)}
        typeMsg(text){return this.inputMsg().type(text)}
        sendMsg(){return this.sendMsgBtn().click()}

    aboutUs(){return this.aboutUsBtn().click()}
        play(){return this.playBtn().click()}
        close(){return this.closeBtn().click()}
        
    cart(){return this.cartBtn().click()}

    signUp(){return this.signUpHeaderBtn().click()}
        typeUsername(text){return this.inputUsername().type(text,{})}
        typePassword(text){return this.inputPassword().type(text)}
        signinUp(){return this.signUpBtn().click()}

    logIn(){return this.logInBtn().click()}
        typeUser(text){return this.inputLoginUser().type(text)}
        typePass(text){return this.inputLoginPass().type(text)}
        loggingIn(){return this.loginBtn().click()}

    phonesCat(){return this.phones().click()}
    laptopsCat(){return this.laptops().click()}
    monitorsCat(){return this.monitors().click()}

    product(){return this.firstCard().click()}
}
export default HomePage;