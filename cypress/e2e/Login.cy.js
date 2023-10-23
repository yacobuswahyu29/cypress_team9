describe('E2E Login account', () => {
  beforeEach(() =>{
    cy.visit('');
  })
    it('Login account', () => {
      cy.get('.panel > .header > .authorization-link > a').click();
      cy.get('#email').click().type('yacobus.ranger@gmail.com');
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').click().type('Password123');
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
    });
    it('Login account Failed', () => {
      cy.get('.panel > .header > .authorization-link > a').click();
      cy.get('#email').click().type(' ');
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').click().type(' ');
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
    });
});