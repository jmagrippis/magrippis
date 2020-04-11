import { NextApiRequest, NextApiResponse } from 'next'

import { isContactPayload } from '../../components/Contact/submit'
import { postmarkClient } from '../../lib/postmark'

const FROM_EMAIL = 'contact@magrippis.com'
const TO_EMAIL = 'contact@magrippis.com'

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(req.method === 'GET' ? 404 : 405).end('method not supported')
    return
  }

  if (!isContactPayload(req.body)) {
    res.status(400).end('your payload looks dodgy')
    return
  }

  const { name, email, subject, content } = req.body

  const response = await postmarkClient
    .sendEmail({
      From: `${name} <${FROM_EMAIL}>`,
      To: TO_EMAIL,
      Subject: `${email} via magrippis.com for ${subject}`,
      TextBody: content,
      Tag: 'contact',
    })
    .catch((err) => {
      console.error('failed to send email', err)
    })

  if (!response) {
    res.status(500).end('error with email transport; try again?')
  }

  res.status(200).end('your message has been sent to Johnny')
}

export default contactHandler
