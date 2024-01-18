
describe('greenkart functionality', () => {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    });

    it('checkout with promo code and place order', function(){
        cy.get('.increment').eq(0).click()
        cy.get('button').contains('ADD TO CART').click()
        cy.get('.cart-icon').first().click()
        cy.get('.cart-items').first().should('be.visible')
        cy.get('button').contains('PROCEED TO CHECKOUT').click()
        cy.get('.promoCode').type('1234five')
        cy.get('button').contains('Apply').click()
        cy.timeout(8000)
        cy.get('.promoInfo').should('have.text','Invalid code ..!')
        cy.get('button').contains('Place Order').click()
        cy.get('select').select('Armenia');
        cy.get('.chkAgree').click()
        cy.get('button').contains('Proceed').click();

    } )
} )