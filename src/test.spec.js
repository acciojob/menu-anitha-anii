// test.spec.js
describe("Check items category", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("All displayed items should belong to category Shakes", () => {
      cy.get('[data-test-id="menu-item-shakes"]').click();
      cy.get(".itemDiv").should("have.length", 3); // Update the length to the actual number of 'Shakes' items
    });
  
    it("All displayed items should belong to category Lunch", () => {
      cy.get('[data-test-id="menu-item-lunch"]').click();
      cy.get(".itemDiv").should("have.length", 2); // Update the length to the actual number of 'Lunch' items
    });
  
    it("All displayed items should belong to category Breakfast", () => {
      cy.get('[data-test-id="menu-item-breakfast"]').click();
      cy.get(".itemDiv").should("have.length", 2); // Update the length to the actual number of 'Breakfast' items
    });
  });
  