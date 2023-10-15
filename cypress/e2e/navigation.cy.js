import routes from '../fixtures/routes.json';

describe('Navigation spec', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('Should exist header & nav', () => {
    cy.get('[data-test=header]').should('exist');
    cy.get('[data-test=header-nav]').should('exist');
  });

  it('Should navigate to the correct paths when links are clicked', () => {
    cy.get('[data-test=header-link]').each(($link) => {
      const linkText = $link.text();
      const linkPath = routes.find((route) => route.label === linkText)?.path;

      if (linkPath) {
        cy.get($link).should('exist');
        cy.get($link).should('have.attr', 'href', linkPath);

        cy.get($link).click();
        cy.url().should('eq', Cypress.config().baseUrl + linkPath);
      }
    });
  });
});
