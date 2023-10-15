describe('template spec', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('History should be empty', () => {
    cy.get('[data-test=history]').should('exist');
    cy.get('[data-test=history]').should('not.have.text');
  });

  it('Expressions should be added to the history', () => {
    cy.get('[data-key=2]').click();
    cy.get('[data-key=4]').click();
    cy.contains('+').click();
    cy.get('[data-key=2]').click();
    cy.contains('=').click();

    cy.get('[data-test=history] [data-test=history-expression]').should('include.text', '24 + 2');

    cy.get('[data-key=4]').click();
    cy.contains('*').click();
    cy.get('[data-key=2]').click();
    cy.contains('=').click();

    cy.get('[data-test=history] [data-test=history-expression]').should('include.text', '4 * 2');
  });

  it('Incomplete expressions should not be added to the history', () => {
    cy.get('[data-key=2]').click();
    cy.contains('=').click();

    cy.get('[data-test=history]').should('be.empty');

    cy.contains('+').click();
    cy.get('[data-test=history]').should('be.empty');
  });

  it('Should clear story', () => {
    cy.get('[data-key=4]').click();
    cy.contains('+').click();
    cy.get('[data-key=2]').click();
    cy.contains('=').click();

    cy.get('[data-test=history] [data-test=history-expression]').should('include.text', '4 + 2');

    cy.visit('/settings');
    cy.get('[data-test=settings-clear-history]').click();

    cy.visit(Cypress.config().baseUrl);
    cy.get('[data-test=history]').should('be.empty');
  });
});
