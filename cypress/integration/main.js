/// <reference types="Cypress" />

const skipLandingPage = () => {
  cy.get("[data-cy=start]").should("exist").should("be.visible");
  cy.get("[data-cy=action-button]").should("have.text", "Iniciar").click();
};

describe("Main integration tests", () => {
  beforeEach(() => {
    cy.intercept("/assets/tarot.json").as("cards");
    cy.visit(Cypress.env("url"));
    cy.wait("@cards");
  });

  it("should show render the start game component", () => {
    skipLandingPage();
  });

  it("should show all cards facing up", () => {
    skipLandingPage();
    cy.get("[data-cy=card-up]").should("have.length", 78);
  });

  it("should start the game", () => {
    skipLandingPage();

    cy.get("[data-cy=action-button]")
      .should("have.text", "Embaralhar cartas")
      .click();

    cy.get("[data-cy=shuffling-cards-text]")
      .should("exist")
      .should("be.visible");
    cy.get("[data-cy=choose-a-card-text]").should("exist").should("be.visible");

    cy.get("[data-cy=card-down]").should("have.length", 78);
  });

  it("should show the choosed card", () => {
    skipLandingPage();

    cy.get("[data-cy=action-button]")
      .should("have.text", "Embaralhar cartas")
      .click();

    cy.get("[data-cy=card-down]").should("have.length", 78);
    cy.get("[data-cy=choose-a-card-text]").should("exist").should("be.visible");

    cy.get("[data-cy=card]").first().click();

    cy.get("[data-cy=card-list] [data-cy=card-up]").should("have.length", 1);
    cy.get("[data-cy=modal-overlay]").should("be.visible");
  });
});
