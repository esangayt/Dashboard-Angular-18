/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable
      // ...
    }
  }
}

Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://dev-web.invian.net/sign-in'); // Navega a la página de inicio de sesión
  cy.get('input[name="email"]').type(email); // Rellena el campo de email
  cy.get('input[name="password"]').type(password); // Rellena el campo de contraseña
  cy.get('button[aria-label="sign in"]').click();

  // Verifica que el inicio de sesión fue exitoso redirigiendo a la página principal o un dashboard
  // cy.url().should('include', '/dashboard');
});
