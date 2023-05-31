describe('code-icon-generator-frontend', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=codeicongeneratorcomponent--primary')
  );
  it('should render the component', () => {
    cy.get('app-code-icon-generator').should('exist');
  });
});
