describe("success sayfasını aciyor", ()=>{
  beforeEach(()=>{
    cy.visit("http://localhost:5174/")
  });

it('Başarılı form gönderimi: success sayfası açılır', () => {
  cy.get('#exampleEmail').type('erdem.guntay@wit.com.tr'); 
  cy.get('#examplePassword').type('9fxIH0GXesEwH_I'); 
  cy.get('#terms').check();
  cy.get('button[type="submit"]').should('not.be.disabled').click();

  cy.url().should('include', '/success');
  cy.contains('Helal Len Sana').should('exist');
});

it(' Email ve password yanlış → 2 hata mesajı, buton disabled', () => {
  cy.get('#exampleEmail').type('yanlisemail');
  cy.get('#examplePassword').type('6'); 
  cy.get('#terms').check();

  cy.get('.invalid-feedback').should('have.length', 2);
  cy.contains('Please enter a valid email address').should('exist');
  cy.contains('Password must be at least 4 characters long').should('exist');
  cy.get('button[type="submit"]').should('be.disabled');
});

it(' Email ve password doğru, checkbox işaretli değil → buton disabled', () => {
  cy.get('#exampleEmail').type('test1@example.com');
  cy.get('#examplePassword').type('1234');
  // Checkbox işaretlenmiyor
  cy.get('button[type="submit"]').should('be.disabled');
});

});