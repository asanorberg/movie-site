// Test 1

describe("Favorites Page", () => {
  it("should load the favorites page", () => {
    cy.visit("/favorites");
    cy.get("h2").contains("My Favorites");
    cy.url().should("include", "/favorites");
  });
});

// Test 2

describe("Add Movie to Favorites", () => {
  it("should add a movie to favorites", () => {
    cy.visit("/movie/519182");

    cy.get("h1").contains("Despicable");

    cy.get(".add-to-favorites-btn").first().click();

    cy.visit("/favorites");

    cy.contains("My Favorites");

    cy.get(".movie-card h2").contains("Despicable");

    cy.get(".favorite-active").should("exist");
  });
});
