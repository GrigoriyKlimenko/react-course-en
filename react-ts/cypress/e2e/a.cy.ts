/// <reference types="cypress" />

describe("about page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders page content", () => {
    cy.contains("Home");
  });
});

export {};
