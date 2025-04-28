
describe("success sayfasını aciyor"), ()=>{
  beforeEach(()=>{
    cy.visit("http://localhost:5173/")
  })
}

it('Başarılı form gönderimi: success sayfası açılır', () => {
  cy.get('input[name="email"]').type('erdem.guntay@wit.com.tr'); 
  cy.get('input[name="password"]').type('9fxIH0GXesEwH_I'); 
  cy.get('input[name="terms"]').check();
  cy.get('button[type="submit"]').should('not.be.disabled').click();

  // Success sayfasına yönlendirildiyse URL veya bir içerik kontrolü:
  cy.url().should('include', '/success'); // ← Success URL'ini kontrol et
  cy.contains('Giriş başarılı').should('exist'); // ← Success mesajı
});