
declare global {
  namespace Cypress {
    interface Chainable {
      loginViiamanger(email: string, password: string): Chainable
      // ...
    }
  }
}

Cypress.Commands.add('loginViiamanger', (email:string, password:string) => {
  cy.visit('https://dev-web.invian.net/sign-in'); // Navega a la página de inicio de sesión
  cy.get('input[name="email"]').type(email); // Rellena el campo de email
  cy.get('input[name="password"]').type(password); // Rellena el campo de contraseña
  cy.get('button[aria-label="sign in"]').click();

  // Verifica que el inicio de sesión fue exitoso redirigiendo a la página principal o un dashboard
  // cy.url().should('include', '/dashboard');
});
