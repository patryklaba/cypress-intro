describe('My first test', ()=>{
    it('should display siatka.org site', ()=> {
        cy.viewport('ipad-2')
        cy.visit('http://siatka.org')
        cy.title().should('include', 'Strefa')
    })
})