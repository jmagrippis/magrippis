import { render, screen } from '@testing-library/react'

import { highlightsContent } from './Highlights/highlightsContent'

import Home from './'

describe('Home', () => {
  it('has sections for every highlight', () => {
    render(<Home />)

    highlightsContent.forEach(async ({ title }) => {
      await screen.findByRole('heading', { name: title })
    })
  })
})
