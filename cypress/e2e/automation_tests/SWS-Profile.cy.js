import credentials from "../../fixtures/login_credentials.json";

describe("SWS-Profile", () => {

  it("Grading preference form", () => {
    cy.goToProfilePage();

    /* Test Assessment feedback: Switch from 'No preference' to 'Audio' */
    // Assert: Current preference is set to 'No preference'
    cy.get("#detail_text-Assessment-Feedback", { timeout: 10000 })
      .should("contain", credentials.user_mich.assessment_feedback);
    // Action: Click edit button
    cy.get("#edit-button-1").click();
    // Assert: Form is in edit mode
    cy.get("#profile-select-Assessment-Feedback").should("be.visible");
    // Action: Select Audio
    cy.get("#profile-select-Assessment-Feedback")
      .select(credentials.user_mich.assessment_feedback_change);
    // Action: Click save 
    cy.get("#save-button-1").click();
    // Assert: Value has been changed
    cy.get("#detail_text-Assessment-Feedback")
      .should("contain", credentials.user_mich.assessment_feedback_change);

    /* Revert to original value */
    // Action: Click edit button
    cy.get("#edit-button-1").click();
    // Assert: Form is in edit mode
    cy.get("#profile-select-Assessment-Feedback").should("be.visible");
    // Action: Select 'No preference'
    cy.get("#profile-select-Assessment-Feedback")
      .select(credentials.user_mich.assessment_feedback);
    // Action: Click save
    cy.get("#save-button-1").click();
    // Assert: Value has been changed
    cy.get("#detail_text-Assessment-Feedback")
      .should("contain", credentials.user_mich.assessment_feedback);



    /* Test Discussion feedback: Switch from 'No preference' to 'Audio' */
    // Assert: Current preference is set to 'No preference'
    cy.get("#detail_text-Discussion-Feedback", { timeout: 10000 })
      .should("contain", credentials.user_mich.discussion_feedback);
    // Action: Click edit button
    cy.get("#edit-button-1").click();
    // Assert: Form is in edit mode
    cy.get("#profile-select-Discussion-Feedback").should("be.visible");
    // Action: Select Audio
    cy.get("#profile-select-Discussion-Feedback")
      .select(credentials.user_mich.discussion_feedback_change);
    // Action: Click save
    cy.get("#save-button-1").click();
    // Assert: Value has been changed
    cy.get("#detail_text-Discussion-Feedback")
      .should("contain", credentials.user_mich.discussion_feedback_change);

    /* Revert to original value */
    // Action: Click edit button
    cy.get("#edit-button-1").click();
    // Assert: Form is in edit mode
    cy.get("#profile-select-Discussion-Feedback").should("be.visible");
    // Action: Select 'No preference'
    cy.get("#profile-select-Discussion-Feedback")
      .select(credentials.user_mich.discussion_feedback);
    // Action: Click save
    cy.get("#save-button-1").click();
    // Assert: Value has been changed
    cy.get("#detail_text-Discussion-Feedback")
      .should("contain", credentials.user_mich.discussion_feedback);
  });
});