describe('E2E create account failed', () => {
    it('create account failed', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.get('.panel > .header > :nth-child(3) > a').click();
      cy.get('#firstname').click().type('test');
      cy.get('#lastname').click().type('cyp');
      cy.get('#email_address').click().type('yacobus.ranger@gmail.com');
      cy.get('#password').click().type('Password123A');
      cy.get('#password-confirmation').click().type('Password123A');
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    });
});

// Create account failed using same email