import credentials from "../../fixtures/login_credentials.json";

describe("SWS-Extension", () => {
  it("Course extension page", () => {
    // https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
	Cypress.on('uncaught:exception', () => {
		return false;
	});

	// Set the viewport
	cy.viewport(1250, 1200);

	// Navigate: Login page on UAT server
	cy.visit(credentials.server_st2);
	// Assert: 'Log in' button in the page
	cy.get("button[type='submit']").should("contain", "Log In");

	/* Action: Fill form and submit */
	cy.get("input[name='username']").type(credentials.user_extension);
	cy.get("input[name='password']").type(Cypress.env("password_mich"));
	cy.get("button[type='submit']").click();

    /* Assert: We are in the course extension page*/
    cy.get(".content-container h3",{timeout: 10000})
        .should("contain", "Apply for a course extension");

    /* Assert: The button 'Get Started' exists */
    cy.get("button.next-step-button")
        .should("contain", "Get Started");
  })

});