/// <reference types="cypress" />

describe("e2e test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Nav links are rendered on the page", () => {
    cy.get("nav")
      .find("a")
      .first()
      .should("have.text", "Home")
      .should("have.class", "selected");
    cy.get("nav").find("a").eq(1).should("have.text", "Registration");
    cy.get("nav").find("a").eq(2).should("have.text", "About us");
  });
  it("Navigation", () => {
    cy.get("nav").find("a").eq(1).click();
    cy.contains("Registration");
    cy.get("nav").find("a").eq(1).should("have.class", "selected");
    cy.url().should("include", "/registration");
    cy.get("nav").find("a").eq(2).click();
    cy.contains("About us");
    cy.get("nav").find("a").eq(2).should("have.class", "selected");
    cy.url().should("include", "/about");
  });
  it("Home page, cards", () => {
    cy.get("input").should("have.value", "");
    cy.get('[data-testid="card"]').eq(0).should("contain", "Full name:");
    cy.get('[data-testid="card"]').eq(0).find("img").should("be.visible");
    cy.get('[data-testid="card"]').eq(0).click();
    cy.get(".modalContent")
      .should("contain", "Racer info")
      .should("contain", "Full name:")
      .should("contain", "City:")
      .should("contain", "Date of birth:")
      .should("contain", "Gender:")
      .should("contain", "Race class:")
      .find("img")
      .should("be.visible");
    cy.get(".closeIcon").click();
    cy.contains("Racer info").should("not.exist");
    cy.get("input").type("Step");
    cy.get(".searchButton").click();
    cy.get('[data-testid="card"]').eq(0).should("contain", "Step");
  });
  it("Registration page", () => {
    cy.get("nav").find("a").eq(1).click();
    cy.get("form").should("be.visible");
    cy.get('input[name="firstName"]').type("Mike");
    cy.get('input[name="lastName"]').type("Mikenov");
    cy.get('input[name="city"]').type("Silent");
    cy.get('input[name="birthday"]').type("1990-01-01");
    cy.get('input[name="male"]').check();
    cy.get("select").select("Drag racing");
    cy.get('input[type="file"]').selectFile("cypress/fixtures/no-image.jpg");
    cy.get('input[type="checkbox"]').check();
    cy.get(".submitButton").click();
    cy.contains("The card was successfully created").should("exist");
    cy.get(".alertButton").click();
    cy.contains("The card was successfully created").should("not.exist");
    cy.get('[data-testid="card"]').eq(0).should("contain", "Full name:");
    cy.get('[data-testid="card"]').eq(0).find("img").should("be.visible");
  });
  it("Error page", () => {
    cy.visit("/not-found");
    cy.contains("Not found...");
  });
});
