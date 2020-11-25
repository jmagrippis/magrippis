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

      it('displays the article in a semantic way', () => {
        const blogPath = 'blog/2020/human-readable-timestamps-with-Luxon'
        cy.visit(`/${blogPath}?utm_source=twitch-campaign`)
        const expectedShareUrl = `${Cypress.config().baseUrl}/${blogPath}`

        cy.findByRole('heading', {
          name: 'Human-readable timestamps with Luxon',
          level: 1,
        }).should('exist')
        cy.findByRole('article').should('exist')

        cy.findByRole('complementary').within(($aside) => {
          cy.findByRole('link', { name: 'tweet' }).should(($anchor) => {
            expect($anchor.attr('href')).to.include(
              'https://twitter.com/intent/tweet?'
            )
          })
          cy.findByRole('button', { name: /copy/i }).click({ force: true })
          cy.findByRole('button', { name: /copied/i }).click({ force: true })

          cy.window().then((win) =>
            win.navigator.clipboard
              .readText()
              .then((text) => expect(text).to.equal(expectedShareUrl))
          )
        })
      })
    })
  })
})
