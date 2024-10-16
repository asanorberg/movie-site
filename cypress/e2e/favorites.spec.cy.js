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
    // Visit the movie page
    cy.visit("/movie/519182"); // Adjust the movie ID based on your app's routing

    // Ensure the movie page is loaded by checking for the movie title or any other unique element
    cy.get("h2").contains("Despicable"); // Assuming the movie title is rendered here

    // Click the favorite button to add the movie to favorites
    cy.get(".add-to-favorites-btn").first.click();

    // Navigate to the favorites page
    cy.visit("/favorites");

    // Check that you are on the favorites page and the title is present
    cy.contains("My Favorites");

    // Verify the movie is present in the favorites list
    cy.get("h2").contains("Despicable");

    // Ensure the movie is favorited (using the `favorite-active` class)
    cy.get(".favorite-active").should("exist");
  });
});
