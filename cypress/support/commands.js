import credentials from "../fixtures/login_credentials.json";

Cypress.Commands.add("login", (email, password) => {
	// https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});

	// Set the viewport
	cy.viewport(1250, 1200);

	// Navigate: Login page on UAT server
	cy.visit(credentials.server_uat );
	// Assert: 'Log in' button in the page
	cy.get("button[type='submit']").should("contain", "Log In");

	/* Action: Fill form and submit */
	cy.get("input[name='username']").type(email);
	cy.get("input[name='password']").type(password);
	cy.get("button[type='submit']").click();
	// Assert: We have reached the dashboard
	cy.get("div.moduleTracker-container", { timeout: 10000 }).should("be.visible");
})


Cypress.Commands.add("goToProfilePage", () => {

	// Start with login page
	cy.login(credentials.user_mich, Cypress.env("password_mich"));

	// Action: Click 'My Profile' button
	cy.get("#my_profile_link").parent().click();

	// Assert: We have successfully reached Profile page
	cy.url().should("include", "my-profile", { timeout: 10000 });
})