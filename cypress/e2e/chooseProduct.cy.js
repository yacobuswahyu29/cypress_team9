describe('E2E Login account', () => {
    it('Login account', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.get('.panel > .header > .authorization-link > a').click();
      cy.get('#email').click().type('yacobus.ranger@gmail.com');
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').click().type('Password123');
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
      cy.get('#ui-id-5').click();
      cy.get('.product-items > :nth-child(3)').click();
      cy.get('#option-label-size-143-item-177').click();
      cy.get('#option-label-color-93-item-50').click();
      cy.get('#product-addtocart-button').click();

    });
});