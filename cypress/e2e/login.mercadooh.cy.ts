describe("Mercadooh", () => {
  it("Mercadooh Login", () => {
    cy.visit("https://dev-web.mercadooh.com/");
    cy.get("button.mat-button").click();

    cy.get('input[name="email"]').type("esangay@invian.net");
    cy.get('input[name="password"]').type("Q7NrWrs9an6Dr4pzBmp-z");
    cy.get('button[aria-label="login"]').click();

    cy.get("#search-navbar > div > button").click();
    cy.wait(5000);
    cy.get("article:nth-of-type(1) div.mat-tooltip-trigger > button").click();
    cy.wait(5000);
    cy.get("button[aria-label='shopping cart']").click();

    cy.get('input[name="name"]').type("Test e2e");
    cy.get('input[name="description"]').type("Detalle Test e2e");
    cy.get("button[type='submit']").click();

    cy.get("div.card .total")
      .invoke('text')
      .then((valorAnterior) => {
        cy.get("button[aria-label='close']").click();
        cy.get("button[aria-label='return']").click();

        cy.wait(5000);

        cy.get("div.card .total")
          .invoke('text')
          .then((valorActual) => {
            expect(valorActual.trim()).to.equal(valorAnterior.trim());
          });
      });
  });
});
