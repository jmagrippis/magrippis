import { Subject } from './subjects'

export type ContactPayload = {
  name: string
  email: string
  subject: Subject
  content: string
}

export const isContactPayload = (payload: any): payload is ContactPayload =>
  payload &&
  typeof payload === 'object' &&
  typeof payload.name === 'string' &&
  typeof payload.email === 'string' &&
  typeof payload.subject === 'string' &&
  typeof payload.content === 'string'

export const submit = async (payload: ContactPayload) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch((error) => {
    console.error('there was an error submitting your email...', error)
  })

  if (!response || !response.ok) {
    return false
  }

  return true
}
