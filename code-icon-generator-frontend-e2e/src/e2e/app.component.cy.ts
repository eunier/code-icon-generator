describe('code-icon-generator-frontend', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('app-root').should('exist');
  });
});
