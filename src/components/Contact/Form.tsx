import { FormEvent, useCallback, useState, useEffect } from 'react'

import { submit } from './submit'
import { subjects, isSubject } from './subjects'
import { Status, StatusToast } from './StatusToast'

export const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState(subjects[0].value)
  const [content, setContent] = useState('')
  const [status, setStatus] = useState<Status>(Status.Idle)

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()

      if (status === Status.Processing) return

      setStatus(Status.Processing)

      submit({
        name,
        email,
        subject,
        content,
      }).then((success) => {
        if (!success) {
          setStatus(Status.Error)
          return
        }

        setStatus(Status.Success)
        setContent('')
      })
    },
    [status, name, email, subject, content]
  )

  useEffect(() => {
    if (status === Status.Success) {
      const timeout = setTimeout(() => {
        setStatus((currentStatus) =>
          currentStatus === Status.Success ? Status.Idle : currentStatus
        )
      }, 5000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [status])

  return (
    <form className="text-xl text-right max-w-readability" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 items-center mb-6">
        <label htmlFor="name" className="text-gray-700">
          Name
        </label>
        <input
          required
          id="name"
          name="name"
          type="text"
          className="form-input w-full px-1 py-2 rounded shadow focus:outline-none focus:ring ring-purple-300 sm:col-span-2 mb-4 sm:mb-0"
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
          className="form-input w-full px-1 py-2 rounded shadow focus:outline-none focus:ring ring-purple-300 sm:col-span-2 mb-4 sm:mb-0"
          value={email}
          onChange={({ currentTarget: { value } }) => {
            setEmail(value)
          }}
        />

        <label htmlFor="subject" className="text-gray-700">
          Subject
        </label>
        <select
          required
          id="subject"
          className="form-select bg-white h-full w-full px-1 py-2 rounded shadow focus:outline-none focus:ring ring-purple-300 sm:col-span-2 mb-4 sm:mb-0"
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
          className="form-input w-full px-1 py-2 rounded shadow focus:outline-none focus:ring ring-purple-300 sm:col-span-3 mb-4 sm:mb-0"
          value={content}
          onChange={({ currentTarget: { value } }) => {
            setContent(value)
          }}
          rows={10}
        />
      </div>

      <div className="flex items-center">
        <StatusToast status={status} />
        <button
          type="submit"
          className="shadow transition duration-300 ease-in-out bg-purple-500 border-transparent hover:bg-purple-600 hover:border-purple-400 font-semibold text-white py-2 px-4 focus:outline-none focus:ring ring-purple-300 border rounded"
        >
          send
        </button>
      </div>
    </form>
  )
}
