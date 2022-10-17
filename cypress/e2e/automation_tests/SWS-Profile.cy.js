
describe("SWS-Profile", () => {

  // it("Assessment feedback", () => {
  //   cy.goToProfilePage();

  //   /* Switch from 'No preference' to 'Audio' */
  //   // Assert: Current preference is set to 'No preference'
  //   cy.get("#detail_text-Assessment-Feedback", { timeout: 10000 }).should("contain" ,"No Preference");
  //   // Action: Click edit button
  //   cy.get("#edit-button-1").click();
  //   // Assert: Form is in edit mode
  //   cy.get("#profile-select-Assessment-Feedback").should("be.visible");
  //   // Action: Select Audio
  //   cy.get("#profile-select-Assessment-Feedback").select("Audio");
  //   // Action: Click save 
  //   cy.get("#save-button-1").click();
  //   // Assert: Value has been changed
  //   cy.get("#detail_text-Assessment-Feedback").should("contain" ,"Audio");

  //   /* Revert to original value */
  //   // Action: Click edit button
  //   cy.get("#edit-button-1").click();
  //   // Assert: Form is in edit mode
  //   cy.get("#profile-select-Assessment-Feedback").should("be.visible");
  //   // Action: Select 'No preference'
  //   cy.get("#profile-select-Assessment-Feedback").select("No Preference");
  //   // Action: Click save
  //   cy.get("#save-button-1").click();
  //   // Assert: Value has been changed
  //   cy.get("#detail_text-Assessment-Feedback").should("contain" ,"No Preference");
  // });

  it("Discussion Feedback", () => {
    cy.goToProfilePage();

    /* Switch from 'No preference' to 'Audio' */
    // Assert: Current preference is set to 'No preference'
    cy.get("#detail_text-Discussion-Feedback", { timeout: 10000 }).should("contain" ,"No Preference");
    // Action: Click edit button
    cy.get("#edit-button-1").click();
    // Assert: Form is in edit mode
    cy.get("#profile-select-Discussion-Feedback").should("be.visible");
    // Action: Select Audio
    cy.get("#profile-select-Discussion-Feedback").select("Open to Discussion");
    // Action: Click save
    cy.get("#save-button-1").click();
    // Assert: Value has been changed
    cy.get("#detail_text-Discussion-Feedback").should("contain" ,"Open to Discussion");

    /* Revert to original value */
    // Action: Click edit button
    cy.get("#edit-button-1").click();
    // Assert: Form is in edit mode
    cy.get("#profile-select-Discussion-Feedback").should("be.visible");
    // Action: Select 'No preference'
    cy.get("#profile-select-Discussion-Feedback").select("No Preference");
    // Action: Click save
    cy.get("#save-button-1").click();
    // Assert: Value has been changed
    cy.get("#detail_text-Discussion-Feedback").should("contain" ,"No Preference");
  });
});