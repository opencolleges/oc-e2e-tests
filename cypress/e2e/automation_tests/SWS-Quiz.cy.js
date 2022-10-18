import credentials from "../../fixtures/login_credentials.json";

describe("SWS-Quiz", () => {

    it("Test landing page", () => {
      cy.login(credentials.user_quiz, Cypress.env("password_quiz"));

      // Action: Click hamburger icon
      cy.get("#overlayOpenDT", { timeout: 10000 }).click();
      // Action: Click on Module 1
      // TODO: better targets
      cy.get(":nth-child(7) > .os-mega-drop-list-style").click();
      // Action: Click on Assessment
      // TODO: better targets
      cy.get(":nth-child(6) > :nth-child(2) > .os-mega-drop-list-style").click();

      // Assert: Start quiz exists
      // TODO: better targets
      cy.get("div.os-cursor-pointer", { timeout: 20000 })
        .should("contain", "Quiz")
        .should("be.visible")
    })
  });