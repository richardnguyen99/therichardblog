/// <reference types="Cypress" />

describe("Index page", () => {
  it("should visist the index page", () => {
    cy.visit("/");
    cy.contains("The latest from Richard.");
  });
});
