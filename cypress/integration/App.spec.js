context('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should start the game', () => {
    cy.get('button')
      .should('have', 'Start')
      .click()
      .get('#root > div > div > div:nth-child(1) > img')
      .should('be.visible')
  })

  it('should pick a card', () => {
    cy.get('button')
      .click()
      .get('#root div div div:first')
      .click()
      .get('#root > div > div > div > div > div:first')
      .should('contain', 'Carta escolhida')
  })

  it('should close modal', () => {
    cy.get('button')
      .click()
      .get('#root div div div:first')
      .click()
      .get('#root > div > div > div > div > div:first > img')
      .click()
  })

  it('should restart the game', () => {
    cy.get('button')
      .click()
      .get('#root div div div:first')
      .click()
      .get('button')
      .should('have', 'Play Again')
      .click()
  })
})
