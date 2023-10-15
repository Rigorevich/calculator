describe('Theme spec', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('Should change the theme when selecting an option', () => {
    cy.visit('/settings');

    cy.get('[data-test=settings-dropdown-button]').click();

    cy.get('[data-test=theme-option-dark]').click();

    cy.get('body').should('have.css', 'background-color', 'rgb(51, 51, 51)');

    cy.get('body').should('have.css', 'color', 'rgb(255, 255, 255)');

    cy.get('[data-test=header]').should('have.css', 'background-color', 'rgb(68, 68, 68)');

    cy.get('[data-test=settings-dropdown-button]').click();

    cy.get('[data-test=theme-option-light]').click();

    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');

    cy.get('body').should('have.css', 'color', 'rgb(51, 51, 51)');

    cy.get('[data-test=header]').should('have.css', 'background-color', 'rgb(67, 67, 67)');
  });
});
