const mobile = 'iphone-x'
const desktop = 'macbook-13'

const canNavigate = () => {
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
}

describe('navigation', () => {
  describe(`on ${mobile}`, () => {
    before(() => {
      cy.viewport(mobile)
    })

    it('can navigate to all the various sections of the site', canNavigate)
  })

  describe(`on ${desktop}`, () => {
    before(() => {
      cy.viewport(desktop)
    })

    it('can navigate to all the various sections of the site', canNavigate)
  })
})
