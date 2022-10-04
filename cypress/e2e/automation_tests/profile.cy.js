
describe("Showcase two different approaches", () => {
  it("Digital caveman approach", () => {
    // https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.viewport(1250, 800);

    // Navigate: Login page on UAT server
    cy.visit('https://uat-os.opencolleges.edu.au/login/index.php');
    // Assert: Log in form has been loaded
    cy.get("button[type='submit']").should("contain", "Log In");
    
    /* Action: Fill form and submit */
    cy.get("input[name='username']").type("mich.rodriguezsol@hotmail.com");
    cy.get("input[name='password']").type("Y[JWcyF27:jef:Y");
    cy.get("button[type='submit']").click();
    // Assert: we have reached the dashboard
    cy.get("div.moduleTracker-container", { timeout: 10000 }).should("be.visible");

    // Action: Click 'My Profile' button
    cy.get("#my_profile_link").parent().click();

    // Assert: We are in Profile page
    cy.url().should("include", "my-profile", { timeout: 10000 });

    /* Switch from 'No preference' to 'Audio' */
    // Assert: Current preference is set to 'No preference'
    cy.get("#detail_text-Assessment-Feedback").should("contain" ,"No Preference");
    // Action: Click edit button
    cy.get("#edit-button-1").click();
    // Assert: Form is in edit mode
    cy.get("#profile-select-Assessment-Feedback").should("be.visible");
    // Action: Select Audio
    cy.get("#profile-select-Assessment-Feedback").select("Audio");
    // Action: Click save
    cy.get("#save-button-1").click();
    // Assert: Value has been changed
    cy.get("#detail_text-Assessment-Feedback").should("contain" ,"Audio");

    /* Revert to original value */
    // Action: Click edit button
    cy.get("#edit-button-1").click();
    // Assert: Form is in edit mode
    cy.get("#profile-select-Assessment-Feedback").should("be.visible");
    // Action: Select 'No preference'
    cy.get("#profile-select-Assessment-Feedback").select("No Preference");
    // Action: Click save
    cy.get("#save-button-1").click();
    // Assert: Value has been changed
    cy.get("#detail_text-Assessment-Feedback").should("contain" ,"No Preference");

  });

  it("Not Digital caveman approach", () => {
    cy.goToProfilePage();

    /* Switch from 'No preference' to 'Audio' */
    // Assert: Current preference is set to 'No preference'
    cy.get("#detail_text-Assessment-Feedback").should("contain" ,"No Preference");
    // Action: Click edit button
    cy.get("#edit-button-1").click();
    // Assert: Form is in edit mode
    cy.get("#profile-select-Assessment-Feedback").should("be.visible");
    // Action: Select Audio
    cy.get("#profile-select-Assessment-Feedback").select("Audio");
    // Action: Click save
    cy.get("#save-button-1").click();
    // Assert: Value has been changed
    cy.get("#detail_text-Assessment-Feedback").should("contain" ,"Audio");

    /* Revert to original value */
    // Action: Click edit button
    cy.get("#edit-button-1").click();
    // Assert: Form is in edit mode
    cy.get("#profile-select-Assessment-Feedback").should("be.visible");
    // Action: Select 'No preference'
    cy.get("#profile-select-Assessment-Feedback").select("No Preference");
    // Action: Click save
    cy.get("#save-button-1").click();
    // Assert: Value has been changed
    cy.get("#detail_text-Assessment-Feedback").should("contain" ,"No Preference");
  })
}) 