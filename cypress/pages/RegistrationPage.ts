class RegistrationPage {
    firstName = "input-firstname"
    lastName = "input-lastname"
    email = "input-email"
    telephone = "input-telephone"
    password = "input-password"
    confirmPassword = "input-confirm"
    agreePrivacyPolicy = "custom-control custom-checkbox custom-control-inline"
    continueButton = 'input[value="Continue"]'
    privacyPolicyAlertMessasge = "alert alert-danger alert-dismissible"

    visit() {
        cy.visit("/register")
    }
    enterFirstName(firstName:string) {
        cy.getById(this.firstName).clear().type(firstName)
    }

    enterLastName(lastName: string) {
        cy.getById(this.lastName).clear().type(lastName)
    }

    enterEmail(email:string) {
        cy.getById(this.email).clear().type(email)
    }

    enterTelephone(phoneNumber: string) {
        cy.getById(this.telephone).clear().type(phoneNumber)
    }

    enterPassword(password: string) {
        cy.getById(this.password).clear().type(password)
    }

    enterConfirmPassword(password:string){
        cy.getById(this.confirmPassword).clear().type(password)
    }
    clickAgreePrivacyPolicy() {
        cy.getByClass(this.agreePrivacyPolicy).click()
    }

    clickContinueButton(){
        cy.get(this.continueButton).click()
    }

    registerUser(
        firstName:string,
        lastName: string,
        email: string,
        telephone: string,
        password: string
    ) {
        this.enterFirstName(firstName)
        this.enterLastName(lastName)
        this.enterEmail(email)
        this.enterTelephone(telephone)
        this.enterPassword(password)
        this.enterConfirmPassword(password)
        this.clickAgreePrivacyPolicy()
        this.clickContinueButton()
    }

    registerUserWithoutAgreeingPrivacyPolicy(
        firstName:string,
        lastName: string,
        email: string,
        telephone: string,
        password: string
    ) {
        this.enterFirstName(firstName)
        this.enterLastName(lastName)
        this.enterEmail(email)
        this.enterTelephone(telephone)
        this.enterPassword(password)
        this.enterConfirmPassword(password)
        this.clickContinueButton()
    }

    getPrivacypolicyWarningMessage() {
        return cy.getByClass(this.privacyPolicyAlertMessasge)
    }
}

export default new RegistrationPage();