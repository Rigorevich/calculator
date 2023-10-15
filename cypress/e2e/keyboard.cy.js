describe('Keyboard spec', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
    cy.get('[data-test=display]').should('have.value', '0');
  });

  it('Should change default expression by click on number', () => {
    cy.get('[data-key=1]').click();
    cy.get('[data-test=display]').should('have.value', '1');
  });

  it('Should change default expression by click on operator', () => {
    cy.contains('-').click();
    cy.get('[data-test=display]').should('have.value', '0-');
  });

  it('Should change last operator on new operator', () => {
    cy.contains('+').click();
    cy.get('[data-test=display]').should('have.value', '0+');

    cy.contains('*').click();
    cy.get('[data-test=display]').should('have.value', '0*');
  });

  it('Should display float numbers', () => {
    cy.contains('.').click();
    cy.get('[data-test=display]').should('have.value', '0.');

    cy.get('[data-key=5]').click();
    cy.contains('+').click();
    cy.contains('.').click();
    cy.get('[data-key=5]').click();

    cy.get('[data-test=display]').should('have.value', '0.5+0.5');
  });

  it('Should calculate expression', () => {
    cy.get('[data-key=2]').click();
    cy.contains('+').click();
    cy.get('[data-key=2]').click();
    cy.contains('*').click();
    cy.get('[data-key=2]').click();
    cy.contains('=').click();
    cy.get('[data-test=display]').should('have.value', '6');
  });

  it('Undo should function', () => {
    cy.get('[data-key=2]').click();
    cy.get('[data-key=C]').click();

    cy.get('[data-test=display]').should('have.value', '0');

    cy.get('[data-key=2]').click();
    cy.get('[data-key=3]').click();
    cy.get('[data-key=1]').click();

    [...Array(2)].forEach(() => cy.get('[data-key=C]').click());

    cy.get('[data-test=display]').should('have.value', '2');
  });

  it('Clear should function', () => {
    cy.get('[data-key=2]').click();
    cy.get('[data-key=2]').click();
    cy.get('[data-key=2]').click();
    cy.get('[data-key=2]').click();

    cy.get('[data-key=CE]').click();

    cy.get('[data-test=display]').should('have.value', '0');
  });
});
