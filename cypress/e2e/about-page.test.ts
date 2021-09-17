/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit("/about");
});

describe("About page", () => {
  it("should visist the about page", () => {
    cy.title().should("eq", "About - The Richard's blog");
    cy.contains("About Richard");
  });

  it("should contains a blinking cursor on wide screens", () => {
    cy.viewport(1024, 768);
    cy.get("h1").get("span").should("be.visible");
  });

  it("should not render the blinking cursor on small screens", () => {
    cy.viewport(1022, 768);
    cy.get("h1 span").should("not.exist");
  });

  it("should work with internal links", () => {
    cy.get("nav").contains("Post").click();
    cy.location("pathname").should("eq", "/post");
    cy.go("back");

    cy.get("nav").contains("The Richard's blog").click();
    cy.location("pathname").should("eq", "/");
    cy.go("back");
  });

  it("should work with external links", () => {
    cy.get("nav")
      .contains("Github")
      .then((link) => cy.request(link.prop("href")));
  });
});