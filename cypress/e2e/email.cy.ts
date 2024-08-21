import "cypress-mailosaur";

// test with mailsour to validate the email
describe('Email Validation', () => {
  it('should receive a validation email after registration', () => {
    // Your login test code here...

    cy.mailosaurGetMessage("xcatrvum", {
      // sentTo: "officer-summer@xcatrvum.mailosaur.net",
      subject: "Activar su nueva cuenta",
    }).then((email) => {
      if (email.subject != null) {
        cy.log(email.subject);
        cy.log(<string>email.html?.body);
        cy.log(<string>email.text?.body);
      }
    });

    const testStart = new Date();

    cy.mailosaurGetMessage("xcatrvum", {
      sentTo: "testignbonito@xcatrvum.mailosaur.net",
    }, {
      receivedAfter: testStart,
    }).then((email) => {
      if (email.subject != null) {
        cy.log(email.subject);
      }
    });
  });
});
