describe('Home Page', () => {
  it('should login successfully', () => {
    // cy.visit('http://localhost:4200/dashboard/user-list');
    cy.login('', '');
    cy.visit('https://dev-web.invian.net/home');
  });
});
