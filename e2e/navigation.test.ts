import puppeteer from 'puppeteer'
import { getDocument, queries, waitFor } from 'pptr-testing-library'

const iphoneXViewport: puppeteer.Viewport = {
  width: 375,
  height: 812,
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 2,
}

const ROOT_PATH = 'http://localhost:3500/'

describe('navigation', () => {
  let browser: puppeteer.Browser
  let page: puppeteer.Page

  beforeEach(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    await page.setViewport(iphoneXViewport)
  })

  afterEach(async () => {
    await browser.close()
  })

  it('can navigate to all the various sections of the site', async () => {
    await page.goto(ROOT_PATH)

    const $document = await getDocument(page)

    // should show the homepage
    await queries.getByRole($document, 'heading', {
      name: 'jmagrippis',
    })

    // navigates to the milestones page
    const $nav = await queries.getByRole($document, 'navigation')
    const $milestonesLink = await queries.getByRole($nav, 'link', {
      name: 'milestones',
    })
    await $milestonesLink.tap()
    await waitFor(() => expect(page.url()).toContain('/milestones'))
    await queries.getByRole($document, 'heading', {
      name: 'Milestones',
    })

    // navigates to the blog page
    const $blogLink = await queries.getByRole($nav, 'link', {
      name: 'blog',
    })
    await $blogLink.tap()
    await waitFor(() => expect(page.url()).toContain('/blog'))
    await queries.getByRole($document, 'heading', {
      name: 'Blog',
    })

    // navigates to the contact page
    const $contactLink = await queries.getByRole($nav, 'link', {
      name: 'contact',
    })
    await $contactLink.tap()
    await waitFor(() => expect(page.url()).toContain('/contact'))
    await queries.getByRole($document, 'heading', {
      name: 'Contact',
    })

    // navigates back to the home page
    const $homeLink = await queries.getByRole($document, 'link', {
      name: 'jmagrippis',
    })
    await $homeLink.tap()
    await waitFor(() => expect(page.url()).toMatch(/\/$/))
  })
})
