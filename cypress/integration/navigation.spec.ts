import { testedLayouts } from '../testedLayouts'

describe('navigation', () => {
  testedLayouts.forEach((layout) => {
    describe(`on ${layout}`, () => {
      before(() => {
        cy.viewport(layout)
      })

      it('can navigate to all the various sections of the site', () => {
        cy.visit('/')

        cy.findByRole('heading', { name: 'jmagrippis' }).should('exist')

        // navigates to the milestones page
        cy.findByRole('navigation').should('exist')
        cy.findByRole('link', { name: 'milestones' }).click()
        cy.findByRole('heading', { name: 'Milestones' }).should('exist')

        // navigates to the blog page
        cy.findByRole('link', { name: 'blog' }).click()
        cy.findByRole('heading', { name: 'Blog' }).should('exist')

        // navigates to the blog page
        cy.findByRole('link', { name: 'contact' }).click()
        cy.findByRole('heading', { name: 'Contact' }).should('exist')

        // navigates back to the home page
        cy.findByRole('link', { name: 'jmagrippis' }).click()
        cy.url().should('match', /\/$/)

        // outbound links also exist
        cy.findByRole('link', { name: 'github' })
        cy.findByRole('link', { name: 'instagram' })
        cy.findByRole('link', { name: 'twitter' })
      })
    })
  })
})
