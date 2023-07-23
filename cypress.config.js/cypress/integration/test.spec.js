

module.exports = {
  baseUrl: 'http://localhost:8080', // Set the base URL for your application
  viewportWidth: 1280, // Set the default viewport width
  viewportHeight: 720, // Set the default viewport height
  integrationFolder: 'cypress/integration', // Set the folder where your test files are located
  screenshotsFolder: 'cypress/screenshots', // Set the folder where screenshots will be saved
  videosFolder: 'cypress/videos', // Set the folder where videos will be saved
  defaultCommandTimeout: 5000, // Set the default timeout for commands (in milliseconds)
  // Add any other custom configurations you need for your tests
};


describe('Calculator App', () => {
    it('Updates display when number buttons are clicked', () => {
      cy.visit('http://localhost:8080'); // Adjust the URL to match your app's development server URL
  
      // Click on number buttons 1, 2, and 3
      cy.get('#btn-1').click();
      cy.get('#btn-2').click();
      cy.get('#btn-3').click();
  
      // Verify if the display input has the correct value '123'
      cy.get('.display input').should('have.value', '123');
    });
  });
  