import credentials from "../../fixtures/login_credentials.json";

describe("Student grades page", () => {
		it("Grades table ", () => {
				cy.login(credentials.user_mich.username, Cypress.env("password_mich"));

				// Action: Click top right button to open the menu
				cy.get("#my_profile_link")
					.parent()
					.click();
				// Action: Click on 'My Grades' menu item
				cy.get('#student_grade_link').click();

				// Assert: We have successfully reached 'My grades' page
				cy.url().should("include", "student-grade");
				cy.get(".page-main-title > h1").should("contain", "My Grades");

				// Assert: Grades table is visible
				cy.get("#grades_dt_id1", { timeout: 10000 }).should("be.visible");
				
				// Assert: Grades row contains a Grade
				cy.get('#grades_dt_row_id10 > .grade-name');
				const grades = ["Satisfactory", "Not Yet Satisfactory"];
				const gradesRegExObj = new RegExp(grades.join("|"),'g');
				cy.get('#grades_dt_row_id10 > .grade-name').contains(gradesRegExObj);
				
				// Assert: Grades row contains a date
				const dateRegExObj = new RegExp("^\\d{2}\/\\d{2}\/\\d{4}$","g")
				cy.get('#grades_dt_row_id10 > .grade-date').contains(dateRegExObj);

		});
});