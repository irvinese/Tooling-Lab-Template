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

    cy.contains(`Search`).click()

    cy.url().should(`include`, `/commands/acitions`)

    cy.get(`Name`).type(`Shane`)

    cy.get(`.dropdwon-selector`).select(`Option 1`)

    cy.get(`.submit-button`).click()

    cy.get(`.history-log`).should(`have.length`, 1)

    cy.get(`.history-log`).contains(`Shane`).should(`exist`)

  })
})