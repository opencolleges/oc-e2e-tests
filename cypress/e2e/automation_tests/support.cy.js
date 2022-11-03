import credentials from "../../fixtures/login_credentials.json";
import supportTiles from "../../fixtures/support_page_tiles.json";
import supportTeams from "../../fixtures/support_page_contact_teams.json";


describe("Student support page", () => {
  beforeEach(() => {
    cy.login(credentials.user_mich.username, Cypress.env("password_mich"));

    // Action: Click support button on the navigation bar
    cy.get("#support_page_link2").click();
  });

  it("What do you want to know about?", () => {
    supportTiles.forEach(q => {
      // Action: Click one of the support tiles
      cy.get(`#${q.id}[href="${q.urlString}"]`)
        .contains(q.iconText)
        .click();

      // Assert: URL contains required string
      cy.url().should("include", q.urlString);

      // Assert: Page loaded contains required title
      cy.get("div.page-main-title > h1").should("contain", q.pageTitle);
      
      // Action: Navigate back to support page using the breadcrumb link 
      cy.get('.os-breadcrumb-last-link').click();
    })
  });

  it("Still need help? Contact our support teams", () => {
    supportTeams.forEach(q => {
      // Action: Click one of the support teams
      cy.get(".support-team-item")
        .contains(q.iconText)
        .click();

      // Assert: URL contains required string
      cy.url().should("include", q.urlString);

      // Assert: Page loaded contains required title
      cy.get(q.pageTitleDOM).should("contain", q.pageTitle);

      // Action: Navigate back to support page
      cy.go('back');
    })
  });

});