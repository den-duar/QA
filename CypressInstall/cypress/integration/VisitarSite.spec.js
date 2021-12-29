/// <reference types="cypress"/>

describe('Suite teste 1: Open site and test', () => {
    beforeEach('Abrir site', () => {
        cy.visit('/')
    })
    it("Abrir site para teste", () => {
        cy.visit("/")
        cy.get('.logo').should('be.exist').and('be.visible')
        cy.get('#search_query_top').type('roupa')
        cy.get('#searchbox > .btn').click()
        cy.get('.alert').should('be.exist').and('be.visible')
    })

})

describe('Suite de teste 2: Add cart', () => {
    it('Adicionar item no carrinho', () => {
        cy.visit('/')
        cy.get('.logo').should('be.exist').and('be.visible')
        cy.get('.ajax_cart_no_product').should('have.text', '(empty)').and('be.visible')
        cy.get('#search_query_top').type('dress')
        cy.get('#searchbox > .btn').click()
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.button-container > .button-medium > span').click()
        cy.get('[title="View my shopping cart"] > .ajax_cart_quantity').should('have.text', '1')
    })

    cy.get('.logo').should('be.exist')
})