
describe("Login and navigate to Profile page", () => {
  it("Digital caveman approach", () => {
    // https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.viewport(1250, 800);

    // Navigate: Login page on UAT server
    cy.visit('https://uat-os.opencolleges.edu.au/login/index.php');
    // Assert: 'Log in' button in the page  
    cy.get("button[type='submit']").should("contain", "Log In");
    
    // Action: Fill form and submit
    cy.get("input[name='username']").type("mich.rodriguezsol@hotmail.com");
    cy.get("input[name='password']").type("Y[JWcyF27:jef:Y");
    cy.get("button[type='submit']").click();
    // Assert: we have reached the dashboard
    cy.get("div.moduleTracker-container").should("be.visible");

    // Action: Click 'My Profile' button
    cy.get("#my_profile_link").parent().click();

    // Assert: We have successfully reached Profile page
    cy.url().should("include", "my-profile");

    cy.get("#detail_text-Assessment-Feedback").should("contain" ,"No Preference");
    cy.get("#edit-button-1").click();
    cy.get("#profile-select-Assessment\\ Feedback").should("be.visible");
    cy.get("#profile-select-Assessment\\ Feedback").select("Audio");
    cy.get("#save-button-1").click();
    cy.get("#detail_text-Assessment-Feedback").should("contain" ,"Audio");

  });

  it("Not Digital caveman approach", () => {
    cy.login();

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