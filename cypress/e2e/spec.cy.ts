describe('Home Page', () => {
  it('should display the correct title', () => {
    cy.visit('http://localhost:4200/dashboard/user-list');

    cy.title().should('include', 'Users');

    cy.get('h1').should('contain.text', 'Users record - false');

    cy.get('p').should('contain.text', 'users works!');

    cy.get('app-title').should('contain.text', 'Users record');

    cy.visit('http://localhost:4200/dashboard/view-transition');
    cy.visit('http://localhost:4200/dashboard/view-transition2');

    cy.get('h1').should('contain.text', 'View Transition 1 - false');

  });
});
