import { testedLayouts } from '../testedLayouts'

describe('coding challenges', () => {
  testedLayouts.forEach((layout) => {
    describe(`on ${layout}`, () => {
      before(() => {
        cy.viewport(layout)
      })

      it('can navigate to the challenges, and back', () => {
        cy.visit('/coding-challenges')

        cy.findByRole('heading', { name: 'Coding Challenges' }).should('exist')
        cy.findAllByRole('article').should('exist')

        // navigate to the first challenge
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
            cy.findByRole('link', { name: 'Check out all coding challenges' })
              .scrollIntoView({
                easing: 'linear',
              })
              // element appears visible on the dashboard but
              // Cypress claims its center is not without the force flag
              .click({ force: true })
            cy.findByRole('heading', { name: 'Coding Challenges' }).should(
              'exist'
            )
          })
      })
    })
  })
})
