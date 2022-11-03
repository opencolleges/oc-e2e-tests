import credentials from "../../fixtures/login_credentials.json";

describe("SWS-Profile", () => {

  it("Grading preference form", () => {
    cy.goToProfilePage();

    /* Test Assessment feedback: Switch from 'No preference' to 'Audio' */
    // Assert: Current preference is set to 'No preference'
    cy.get("#assessment-feedback-detail_text", { timeout: 10000 })
      .should("contain", credentials.user_mich.assessment_feedback);
    // Action: Click edit button
    cy.get("#grading-preference-edit").click();
    // Assert: Form is in edit mode
    cy.get("#assessment-feedback-profile-select").should("be.visible");
    // Action: Select Audio
    cy.get("#assessment-feedback-profile-select")
      .select(credentials.user_mich.assessment_feedback_change);
    // Action: Click save 
    cy.get("#grading-preference-save").click();
    // Assert: Value has been changed
    cy.get("#assessment-feedback-detail_text")
      .should("contain", credentials.user_mich.assessment_feedback_change);

    /* Revert to original value */
    // Action: Click edit button
    cy.get("#grading-preference-edit").click();
    // Assert: Form is in edit mode
    cy.get("#assessment-feedback-profile-select").should("be.visible");
    // Action: Select 'No preference'
    cy.get("#assessment-feedback-profile-select")
      .select(credentials.user_mich.assessment_feedback);
    // Action: Click save
    cy.get("#grading-preference-save").click();
    // Assert: Value has been changed
    cy.get("#assessment-feedback-detail_text")
      .should("contain", credentials.user_mich.assessment_feedback);



    /* Test Discussion feedback: Switch from 'No preference' to 'Audio' */
    // Assert: Current preference is set to 'No preference'
    cy.get("#discussion-feedback-detail_text", { timeout: 10000 })
      .should("contain", credentials.user_mich.discussion_feedback);
    // Action: Click edit button
    cy.get("#grading-preference-edit").click();
    // Assert: Form is in edit mode
    cy.get("#discussion-feedback-profile-select").should("be.visible");
    // Action: Select Audio
    cy.get("#discussion-feedback-profile-select")
      .select(credentials.user_mich.discussion_feedback_change);
    // Action: Click save
    cy.get("#grading-preference-save").click();
    // Assert: Value has been changed
    cy.get("#discussion-feedback-detail_text")
      .should("contain", credentials.user_mich.discussion_feedback_change);

    /* Revert to original value */
    // Action: Click edit button
    cy.get("#grading-preference-edit").click();
    // Assert: Form is in edit mode
    cy.get("#discussion-feedback-profile-select").should("be.visible");
    // Action: Select 'No preference'
    cy.get("#discussion-feedback-profile-select")
      .select(credentials.user_mich.discussion_feedback);
    // Action: Click save
    cy.get("#grading-preference-save").click();
    // Assert: Value has been changed
    cy.get("#discussion-feedback-detail_text")
      .should("contain", credentials.user_mich.discussion_feedback);
  });
});