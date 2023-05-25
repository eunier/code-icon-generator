describe('code-icon-generator-frontend', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=codeicongeneratorpagecomponent--primary')
  );
  it('should render the component', () => {
    cy.get('app-code-icon-generator-page').should('exist');
  });
});
