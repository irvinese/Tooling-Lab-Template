/* eslint-disable no-undef */
describe(`My First Test`, () => {
  it(`gets, types, and asserts`, () => {
    // eslint-disable-next-line no-undef
    cy.visit(`https://example.cypress.io`)

    // eslint-disable-next-line no-undef
    cy.contains(`type`).click()

    cy.url().should(`include`, `/commands/acitions`)

    cy.get(`.action-email`).type(`fake@email.com`)

    cy.get(`.action-email`).should(`have.value`, `fake@email.com`)
  })
})