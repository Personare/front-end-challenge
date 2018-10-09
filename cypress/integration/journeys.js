describe('Journeys', () => {
    it('open modal when click on closed card', () => {
        cy.visit('/');
        cy.wait(1000);

        cy.get('.MainHeader .Button').click();

        cy.get('.Card:first').click();

        cy.get('.Modal').should('exist');
    });
});
