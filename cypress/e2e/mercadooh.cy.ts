import * as Mailosaur from 'mailosaur';
const mailosaurClient = new Mailosaur.MailosaurClient('YOUR_MAILOSAUR_API_KEY');

describe('Mercadooh Register', () => {
  it('should display the correct title and content', () => {
    cy.visit('https://web.mercadooh.com/account-registration')

    cy.get('input[name="email"]').type('test_extremo_extremo@test.com');
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

// // test with mailsour to validate the email
// describe('Email Validation', () => {
//   it('should receive a validation email after registration', () => {
//     // Your login test code here...
//
//     // Check the email
//     cy.wrap(mailosaurClient.messages.get('YOUR_MAILOSAUR_SERVER_ID', {
//       sentTo: 'test_extremo_extremo@test.com'
//     })).then((email) => {
//
//     }
//     });
//   });
