import { NextApiRequest, NextApiResponse } from 'next'

const isValidPayload = (payload: any) =>
  payload &&
  typeof payload.name === 'string' &&
  typeof payload.email === 'string' &&
  typeof payload.subject === 'string' &&
  typeof payload.content === 'string'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(req.method === 'GET' ? 404 : 405).end('method not supported')
    return
  }

  if (!isValidPayload(req.body)) {
    res.status(400).end('your payload looks dodgy')
    return
  }

  res.status(200).end('your message has been sent to Johnny')
}
