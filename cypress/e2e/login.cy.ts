describe('Home Page', () => {
  it('should login successfully', () => {
    // cy.visit('http://localhost:4200/dashboard/user-list');
    cy.login('emalaver@invian.net', 't5r4e3w2q1');
    cy.visit('https://dev-web.invian.net/home');
  });
});
