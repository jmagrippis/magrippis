import { testedViewports } from '../testedViewports'

describe('blog', () => {
  testedViewports.forEach((viewport) => {
    describe(`on ${viewport}`, () => {
      before(() => {
        cy.viewport(viewport)
      })

      it('can navigate to the articles, and back', () => {
        cy.visit('/blog')

        cy.findByRole('heading', { name: 'Blog' }).should('exist')
        cy.findAllByRole('article').should('exist')

        // navigate to the first article
        let title: string
        cy.findAllByRole('article')
          .first()
          .within(() => {
            cy.findByRole('heading').should(($title) => {
              title = $title.text()
              expect(title).to.contain('')
            })
          })
          .then(() => {
            cy.findAllByRole('article').first().click()
            cy.findByRole('article')
            cy.findByRole('heading', { name: title })

            // navigate back to all articles
            cy.findByRole('link', { name: 'Check out all posts' })
              .scrollIntoView({
                easing: 'linear',
              })
              // element appears visible on the dashboard but
              // Cypress claims its center is not without the force flag
              .click({ force: true })
            cy.findByRole('heading', { name: 'Blog' }).should('exist')
          })
      })
    })
  })
})
