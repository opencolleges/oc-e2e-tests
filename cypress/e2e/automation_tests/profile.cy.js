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
    cy.get("#display_name").should("be.visible");
    // Action: Change name
    cy.get("#display_name")
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
    cy.get("#display_name").should("be.visible");
    // Action: Type original name
    cy.get("#display_name")
    .clear()
    .type(credentials.user_mich.name);
    // Action: Click save
    cy.get("#about-me-save").click();
    // Assert: Name has been reverted
    cy.get("#about-me-name")
      .should("contain", credentials.user_mich.name);
  });
}) ;