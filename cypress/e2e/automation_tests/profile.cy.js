import credentials from "../../fixtures/login_credentials.json";

describe("Student profile page", () => {

  it("About me form", () => {
    cy.goToProfilePage();

    /* Change name */
    // Assert: Original name
    cy.get("#about-me-name")
      .should("contain", credentials.user_mich.name);
    // Action: Click edit button
    cy.get("#about-me-edit").click();
    // Assert: Form is in edit mode
    cy.get("#about-me-display-name").should("be.visible");
    // Action: Change name
    cy.get("#about-me-display-name")
    .clear()
    .type(credentials.user_mich.name_change);
    // Action: Click save
    cy.get("#about-me-save").click();
    // Assert: Name has been changed
    cy.get("#about-me-name")
      .should("contain", credentials.user_mich.name_change);

    /* Revert to original value */
    // Action: Click edit button
    cy.get("#about-me-edit").click();
    // Assert: Form is in edit mode
    cy.get("#about-me-display-name").should("be.visible");
    // Action: Type original name
    cy.get("#about-me-display-name")
    .clear()
    .type(credentials.user_mich.name);
    // Action: Click save
    cy.get("#about-me-save").click();
    // Assert: Name has been reverted
    cy.get("#about-me-name")
      .should("contain", credentials.user_mich.name);
  });

  it("Study Buddy from", () => {
    cy.goToProfilePage();

    /* Change study buddy settings value */
    // Assert: Current preference
    cy.get("#study-buddy-value")
      .should("contain", credentials.user_mich.study_buddy);
    // Action: Click edit button
    cy.get("#study-buddy-edit").click();
    // Assert: Form is in edit mode
    cy.get("#study-buddy-select").should("be.visible");
    // Action: Change study buddy value
    cy.get("#study-buddy-select")
      .select(credentials.user_mich.study_buddy_change);
    // Action: Click save
    cy.get("#study-buddy-save").click();
    // Assert: Value has been changed
    cy.get("#study-buddy-value")
      .should("contain", credentials.user_mich.study_buddy_change);

    /* Revert to original value */
    // Action: Click edit button
    cy.get("#study-buddy-edit").click();
    // Assert: Form is in edit mode
    cy.get("#study-buddy-select").should("be.visible");
    // Action: Select original value
    cy.get("#study-buddy-select")
      .select(credentials.user_mich.study_buddy);
    // Action: Click save
    cy.get("#study-buddy-save").click();
    // Assert: Value has been changed
    cy.get("#study-buddy-value")
      .should("contain", credentials.user_mich.study_buddy);
  });
});