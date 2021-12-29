   /// <reference types="cypress" />

   describe('Testes Dextra', () => {

       beforeEach(function() {
           cy.visit('/')
           cy.contains('T-shirts')
       })

       it('testar uma coisa', function() {
           let dressSize = 'M'
           let dressQuantity = '2'
           let dressPrice = '26.00'
           cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click({ force: true })

           cy.contains('Printed Dress').click();

           cy.get('#our_price_display').contains($, { dressPrice })
           cy.get('#our_price_display')
               .then((price) => {
                   cy.wrap(price.text().replace('$', '')).as('_price')
               })
           cy.get('.button-plus > span').click()
           cy.get('#quantity_wanted').should('have.value', dressQuantity)
           cy.get('#group_1')
               .select(dressSize)
               .find('option')
               .then(($group) => {
                   const texts = $group.map((i, el) => Cypress.$(el).text())
                   const size = texts.get()
                   expect(size).to.deep.eq(['S', 'M', 'L'])
               })

           cy.get('.ajax_cart_no_product').should('have.text', '(empty)')

           cy.contains('Add to cart').click()

           cy.contains('There are 2 items in your cart.')

           cy.get('.layer_cart_product > h2')
               .should(($text) => {
                   expect($text.text().trim()).equal('Product successfully added to your shopping cart')
               })

           cy.get('@_price').then(function(unitPrice) {
               cy.log(unitPrice)

               let totalPriceProd = multiply(unitPrice, dressQuantity)
               expect(totalPriceProd).to.eq(52.00)

               cy.get(':nth-child(3) > .ajax_cart_shipping_cost').then(function(shipping) {
                   cy.log(shipping.text())
                   let totalShipping = shipping.text().replace('$', '')

                   let totalCart = add(totalPriceProd, totalShipping)
                   cy.log(totalCart)
                   cy.get(':nth-child(4) > .ajax_block_cart_total').then(function(_total) {
                       cy.log(_total.text())
                       let total = _total.text().replace('$', '').replace('.00', '')
                       expect(Number(total)).eq(totalCart)
                   })
               })
           })

           cy.get('.button-medium > span').click()
           cy.get('[title="View my shopping cart"] > .ajax_cart_quantity').should('have.text', dressQuantity)
           cy.get('[title="View my shopping cart"] > .ajax_cart_product_txt_s').should('have.text', 'Products')
       })

       function multiply(a, b) {
           return a * b
       }

       function add(a, b) {
           return Number(a) + Number(b)
       }

   })