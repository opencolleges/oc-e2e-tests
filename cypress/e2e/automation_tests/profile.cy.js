describe("Login", () => {
  it("What", () => {
    
    https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    // Navigate: Login page on UAT server
    cy.visit('https://uat-learning.opencolleges.edu.au/login/index.php');
    // Assert: 'Log in' button in the page  
    cy.get("button[type='submit']").should("contain", "Log In");
    
    // Action: Fill form and submit
    cy.get("input[name='username']").type("mich.rodriguezsol@hotmail.com");
    cy.get("input[name='password']").type("Y[JWcyF27:jef:Y");
    cy.get("button[type='submit']").click();

    // Action: Click hamburger icon on the top left 
    cy.get("#overlayOpenMob").click();
    
    // Action: Click 'My Account' button
    cy.get("div.support-top-level-title")
      .contains("My Account")
      .click();

    // Action: Click 'My Profile' button
    cy.get("div.os-md-menu-list")
    .contains("My Profile")
    .click();
    // Assert: We have successfully reached Profile page
    cy.url().should('include', 'my-profile');
    
  })
})