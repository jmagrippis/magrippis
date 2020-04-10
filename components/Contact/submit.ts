import { Subject } from './subjects'

type Payload = {
  name: string
  email: string
  subject: Subject
  content: string
}

export const submit = async (payload: Payload) => {
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
