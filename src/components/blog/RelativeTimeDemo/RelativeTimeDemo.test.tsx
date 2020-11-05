import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RelativeTimeDemo } from './RelativeTimeDemo'

const MINUTE_IN_MS = 60 * 1000

describe('RelativeTimeDemo', () => {
  it('displays the given timestamp in relative time', async () => {
    const timestamp = new Date().getTime() - 2 * MINUTE_IN_MS - 100

    render(<RelativeTimeDemo />)

    const timestampInput = screen.getByLabelText(/timestamp/gi)
    userEvent.clear(timestampInput)
    await userEvent.type(timestampInput, `${timestamp}`)

    screen.getByText('2 minutes ago')
  })

  it('displays the given ISO String in relative time', async () => {
    const isoString = new Date(
      new Date().getTime() - 10 * MINUTE_IN_MS - 100
    ).toISOString()

    render(<RelativeTimeDemo />)

    const isoStringInput = screen.getByLabelText(/ISO string/gi)
    userEvent.clear(isoStringInput)
    await userEvent.type(screen.getByLabelText(/ISO string/gi), isoString)

    screen.getByText('10 minutes ago')
  })

  it('sets both inputs to display relative time 1 second ago', async () => {
    render(<RelativeTimeDemo />)

    userEvent.click(screen.getByRole('button', { name: 'set both to now!' }))

    expect(screen.getAllByText('1 second ago')).toHaveLength(2)
  })
})
