/* eslint-disable no-undef */
describe(`My First Test`, () => {
  it(`types my name`, () => {

    /*
    cy.visit(`https://example.cypress.io`)

    cy.contains(`type`).click()

    cy.url().should(`include`, `/commands/acitions`)

    cy.get(`.action-email`).type(`fake@email.com`)

    cy.get(`.action-email`).should(`have.value`, `fake@email.com`)
    */
    
    cy.visit(`https://www.google.com/`)
    
    cy.get(`textarea.gLFyf`).type(`Shane`)

    cy.get(`ul.G43f7e`).first().click()
   
    cy.get(`textarea.gLFyf`).should(`have.length`, 1)

    cy.get(`textarea.gLFyf`).contains(`shane`).should(`exist`)

  })
})