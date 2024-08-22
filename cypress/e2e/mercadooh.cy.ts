import "cypress-mailosaur";

describe('Mercadooh Register', () => {
  it('should display the correct title and content', () => {
    const mail = Math.floor(10 + Math.random() * 90);
    const domain = 'xcatrvum.mailosaur.net';

    cy.visit('https://web.mercadooh.com/account-registration')

    cy.get('input[name="email"]').type(`testE2E_C${mail}@${domain}`);
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('input[name="name"]').type('Test');
    cy.get('input[name="lastname"]').type('Test');
    cy.get('input[name="address"]').type('Test');
    cy.get('input[name="password"]').type('123456ABC.');
    cy.get('input[name="confirm_password"]').type('123456ABC.');
    cy.get('input[type="checkbox"]').click({force: true});
    cy.get('button[aria-label="register"]').click();

    cy.get('h1.mat-dialog-title').should('contain.text', '¡Gracias por registrarte!');
    cy.get('div.mat-dialog-content').should('contain.text', 'Revisa tu correo electrónico para validar tu registro.');
  })
});

describe('Email Validation Mercadooh', () => {
  it('should receive a validation email after registration', () => {
    cy.mailosaurGetMessage("xcatrvum", {
      subject: "Activar su nueva cuenta",
    }).then((email) => {
      if (email.subject != null) {
        expect(email!.subject).to.equal('Activar su nueva cuenta');
        expect(<string>email.from![0].email).to.equal('esangay@invian.net');
        expect(email.text?.body).to.contain('Hola');
        const https = require("https");
        cy.visit(email.text!.links![0].href);
      }
    });
  });
});
