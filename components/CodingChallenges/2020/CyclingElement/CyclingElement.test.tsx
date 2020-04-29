import React from 'react'
import { render, screen } from '@testing-library/react'

import { CyclingElement } from './CyclingElement'

describe('CyclingElement', () => {
  it('cycles through to the given elements', async () => {
    const elements = ['I am first', 'I am second']

    render(<CyclingElement elements={elements} />)

    // starts with the first one
    screen.getByText(elements[0])

    // makes it to the second one
    await screen.findByText(elements[1])

    // restarts the cycling
    await screen.findByText(elements[0])
  })
})
