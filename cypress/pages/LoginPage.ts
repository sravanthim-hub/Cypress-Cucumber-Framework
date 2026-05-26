class LoginPage {
  
    email = "#input-email";
    password = "#input-password";
    loginButton = 'input[value="Login"]';
    loginFailedWarning = `#account-login > .alert`;

    visit() {
      cy.visit("/login");
    }
  
    enterEmail(email: string) {
      cy.get(this.email).clear().type(email);
    }
  
    enterPassword(password: string) {
      cy.get(this.password).clear().type(password);
    }
  
    clickLoginButton() {
      cy.get(this.loginButton).click();
    }

    login(email: string, password: string) {
        this.enterEmail(email)
        this.enterPassword(password)
        this.clickLoginButton()
    }

    getLoginFailedMessage(){
        return cy.get(this.loginFailedWarning)
    }
  }

  export default new LoginPage();