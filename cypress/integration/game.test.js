describe('Game flow test', () => {
  it('starts the game', () => {
    cy.visit('http://localhost:9000/');

    cy.contains('Jogar').click();

    cy.url()
      .should('include', '/');
  });

  it('goes back to start page', () => {
    cy.visit('http://localhost:9000/');

    cy.contains('Jogar').click();
    cy.contains('Voltar').click();

    cy.url()
      .should('include', '/');
  });

  it('chooses a card and displays it with name and description', () => {
    cy.visit('http://localhost:9000/');

    cy.contains('Jogar').click();

    const rdnNum = Math.round(Math.random() * 77);
    cy.get('section > div').eq(rdnNum).click();
    
    cy.url()
      .should('include', '/end-game');
    });
});