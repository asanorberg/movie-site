// Test 1

describe("Favorites Page", () => {
  it("should load the favorites page", () => {
    cy.visit("/favorites"); // Adjust the URL based on your routing setup
    cy.get("h2").contains("My Favorites");
    cy.url().should("include", "/favorites");
  });
});

// Test 2

describe("Add Movie to Favorites", () => {
  it("should add a movie to favorites", () => {
    cy.visit("/"); // Visit the homepage or the page where the movie can be added

    // Replace `.favorite-button` with the actual class or selector of your Favorite button
    cy.get(".add-to-favorites-btn").first().click(); // Click the first favorite button found

    cy.visit("/favorites"); // Visit the favorites page
    cy.contains("My Favorites"); // Check that you are on the favorites page

    // Ensure the movie is present in the favorites
    cy.get(".favorite-active").should("have.length.greaterThan", 0); // Replace with your selector for favorite movies
  });
});
