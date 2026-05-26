class MyAccountPage {
  
    title = "card-header h5";
    logoutLink = '.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"]'
    
    getTitle(){
        return cy.getByClass(this.title).first()
    }

    logout() {
        cy.get(this.logoutLink).click()
    }
  }

  export default new MyAccountPage();