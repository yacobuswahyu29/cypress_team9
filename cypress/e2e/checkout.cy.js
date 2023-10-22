describe('E2E view & update - ShopingChart', () => {
    it('view & update - ShopingChart', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.get('.panel > .header > .authorization-link > a').click();
      cy.get('#email').click().type('yacobus.ranger@gmail.com');
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').click().type('Password123');
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
      cy.wait(2500);
      cy.get('.showcart').click();
      cy.wait(2500);
      cy.get('#top-cart-btn-checkout').click();
      cy.wait(15000);
      cy.get('#G91P5OE').click().type('sanbercode');
      cy.get('#J61J9EO').click().type('jln. gurameh');
      cy.get('#J61J9EO').click().type('jayapura');
      cy.get('#K7I095H').click();
      cy.get('#G2T4JL8').click().type('42342');
      cy.get('#GIEDE1M').click();
      cy.get('#K3R1RGL').click().type('0812738174');
      cy.get(':nth-child(1) > :nth-child(1) > .radio').click();
      cy.get('.button').click();



    });
});