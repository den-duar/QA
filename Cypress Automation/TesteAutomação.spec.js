/// automação utilizando cypress
/// <reference types = 'cypress'/>

describe('Teste: Automação Página Inicial', () => {
    it('Abrir homepage e testar se estou nela', () => {
        cy.visit('/') ///Pagina a ser visitada configurada no cypress.json ("baseUrl": "http://automationpractice.com/index.php")
        cy.get('.logo').should('be.exist').and('be.visible')
        cy.get('#htmlcontent_top > .htmlcontent-home > .htmlcontent-item-1 > .item-link > .item-img').should('be.exist').and('be.visible')

    })

    it('Verificar contact us e Sign in', () => {
        cy.visit('/')
        cy.get('#contact-link > a').should('be.exist').and('be.visible').click()
        cy.get('.navigation_page').should('have.text', 'Contact')
        cy.visit('/')
        cy.get('.login').should('be.exist').and('be.visible').click()
        cy.get('.page-heading').should('have.text', 'Authentication')
    })

    it('Verificar numero', () => {
        cy.visit('/')
        cy.get('.shop-phone > strong').should('be.exist').and('be.visible').and('have.text', '0123-456-789')


    })

})