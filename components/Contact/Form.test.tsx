import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import fetchMock from 'fetch-mock'

import { Form } from './Form'
import { subjects } from './subjects'

describe('Form', () => {
  afterEach(fetchMock.reset)

  it('can submit successfully', async () => {
    const name = 'Elena'
    const email = 'elena@example.com'
    const subject = subjects[1]
    const content =
      'Hey, maybe you could create a coding challenge that exposes how snapshot tests can only be harmful?'

    fetchMock.post('/api/contact', 200)
    render(<Form />)

    await userEvent.type(screen.getByLabelText('Name'), name)
    await userEvent.type(screen.getByLabelText('Email'), email)

    userEvent.selectOptions(screen.getByLabelText('Subject'), subject.value)
    expect(
      (screen.getByText(subject.display) as HTMLOptionElement).selected
    ).toBe(true)

    await userEvent.type(screen.getByLabelText('Content'), content)

    userEvent.click(screen.getByText('send'))

    expect(screen.getByText('sending your message...')).toBeTruthy()

    await screen.findByText('Johnny got your message, cheers!')

    // and clears the content field
    expect((screen.getByLabelText('Content') as HTMLInputElement).value).toBe(
      ''
    )

    // @ts-ignore
    const requestBody = fetchMock.lastOptions().body as string
    expect(JSON.parse(requestBody)).toEqual({
      name,
      email,
      content,
      subject: subject.value,
    })
  })

  it('shows a message if submission fails', async () => {
    const content =
      'Hey, I sure hope this message makes it to you and the server is not down or something'
    fetchMock.post('/api/contact', 500)
    render(<Form />)

    await userEvent.type(screen.getByLabelText('Name'), 'Aks')
    await userEvent.type(screen.getByLabelText('Email'), 'aks@example.com')

    userEvent.click(screen.getByLabelText('Subject'))
    userEvent.click(screen.getByText(subjects[2].display))

    await userEvent.type(screen.getByLabelText('Content'), content)

    userEvent.click(screen.getByText('send'))

    expect(screen.getByText('sending your message...')).toBeTruthy()

    await screen.findByText('something went wrong, could you try again?')

    // and DOES NOT clear the content field
    expect((screen.getByLabelText('Content') as HTMLInputElement).value).toBe(
      content
    )
  })
})
