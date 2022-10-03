// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import user from '../fixtures/example.json'
Cypress.Commands.add("login", (email, password) => {
	// https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});

	// Set the viewport
	cy.viewport(1250, 800);

	// Navigate: Login page on UAT server
	cy.visit(user.uat_server);
	// Assert: 'Log in' button in the page
	cy.get("button[type='submit']").should("contain", "Log In");

	// Action: Fill form and submit
	cy.get("input[name='username']").type("mich.rodriguezsol@hotmail.com");
	cy.get("input[name='password']").type("Y[JWcyF27:jef:Y");
	cy.get("button[type='submit']").click();
	// Assert: we have reached the dashboard
	cy.get("div.moduleTracker-container", { timeout: 10000 }).should("be.visible");
})


Cypress.Commands.add("goToProfilePage", () => {

	// Start with login page
	Cypress.login();

	// Action: Click 'My Profile' button
	cy.get("#my_profile_link").parent().click();

	// Assert: We have successfully reached Profile page
	cy.url().should("include", "my-profile");
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })