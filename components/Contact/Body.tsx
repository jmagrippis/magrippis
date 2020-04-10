import React, { FormEvent, useCallback, useState } from 'react'

import { submit } from './submit'
import { subjects, isSubject } from './subjects'

export const Body = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState(subjects[0].value)
  const [content, setContent] = useState('')

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()

      submit({
        name,
        email,
        subject,
        content,
      }).then((success) => {
        if (success) {
          console.log('we did it')
        }
      })
    },
    [name, email, subject, content]
  )

  return (
    <main className="w-full flex-grow py-4">
      <div className="container m-auto p-4">
        <h1 className="text-4xl mb-6">Contact</h1>

        <section className="text-xl mb-6" style={{ maxWidth: '60ch' }}>
          <p className="mb-4">Looking for mentoring? Career-change advice?</p>
          <p className="mb-4">
            Maybe you’re up for a collab on the gram? On YouTube? Or would like
            to stream some code with me, or record a podcast?
          </p>
          <p>
            Whichever the case, the form below is the guaranteed way to reach
            me! So, go for it 😄
          </p>
        </section>

        <form
          className="text-xl text-right"
          style={{ maxWidth: '60ch' }}
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 items-center mb-6">
            <label htmlFor="name" className="text-gray-700">
              Name
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              className="form-input w-full px-1 py-2 rounded shadow focus:outline-none focus:shadow-outline sm:col-span-2 mb-4 sm:mb-0"
              value={name}
              onChange={({ currentTarget: { value } }) => {
                setName(value)
              }}
            />

            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              className="form-input w-full px-1 py-2 rounded shadow focus:outline-none focus:shadow-outline sm:col-span-2 mb-4 sm:mb-0"
              value={email}
              onChange={({ currentTarget: { value } }) => {
                setEmail(value)
              }}
            />

            <label htmlFor="email" className="text-gray-700">
              Subject
            </label>
            <select
              required
              className="form-select h-full w-full px-1 py-2 rounded shadow focus:outline-none focus:shadow-outline sm:col-span-2 mb-4 sm:mb-0"
              value={subject}
              onChange={({ currentTarget: { value } }) => {
                if (isSubject(value)) {
                  setSubject(value)
                }
              }}
            >
              {subjects.map(({ value, display }) => (
                <option key={value} value={value}>
                  {display}
                </option>
              ))}
            </select>

            <label htmlFor="content" className="text-left text-gray-700">
              Content
            </label>
            <textarea
              required
              id="content"
              name="content"
              className="form-input w-full px-1 py-2 rounded shadow focus:outline-none focus:shadow-outline sm:col-span-3 mb-4 sm:mb-0"
              value={content}
              onChange={({ currentTarget: { value } }) => {
                setContent(value)
              }}
              rows={10}
            />
          </div>

          <div className="text-left mb-4"></div>

          <button
            type="submit"
            className="transition duration-300 ease-in-out bg-purple-500 border-transparent hover:bg-purple-600 hover:border-purple-400 font-semibold text-white py-2 px-4 border rounded"
          >
            send
          </button>
        </form>
      </div>
    </main>
  )
}
