import "cypress-mailosaur";

// test with mailsour to validate the email
describe('Email Validation', () => {
  it('should receive a validation email after registration', () => {
    // Your login test code here...

    cy.mailosaurGetMessage("xcatrvum", {
      // sentTo: "officer-summer@xcatrvum.mailosaur.net",
      subject: "Activar su nueva cuenta",
    }).then((email) => {
      cy.log(email.subject!);
      // cy.log(<string>email.from![0].email);
      expect(email!.subject).to.equal('Activar su nueva cuenta');
      expect(<string>email.from![0].email).to.equal('esangay@invian.net');
      expect(email.text?.body).to.contain('Hola Erlin Sangay');

      // cy.log(<string>email.html?.body);
      // cy.log(<string>email.text?.body);
      cy.log(<string>email.text?.links);
      // cy.log(`${email.html?.links?.length} links found in HTML content`);
      // cy.log(`${email.text?.links?.length} links found in plain text content`);
      const https = require("https");

      // if ("links" in email.html) {
      //   if (email.html.links) {
      // https.get(email.text!.links![0].href);
      cy.visit(email.text!.links![0].href);
        // }
      // } // 200


    });

    cy.visit('https://web.viiamanager.com/');

    // const testStart = new Date();
    //
    // cy.mailosaurGetMessage("xcatrvum", {
    //   sentTo: "testignbonito@xcatrvum.mailosaur.net",
    // }, {
    //   receivedAfter: testStart,
    // }).then((email) => {
    //   if (email.subject != null) {
    //     cy.log(email.subject);
    //   }
    // });
  });
});
