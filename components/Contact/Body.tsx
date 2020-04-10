import React from 'react'

import { Form } from './Form'
import { Signup } from '../Home/Signup'

export const Body = () => (
  <main className="w-full flex-grow pt-4">
    <div className="container m-auto p-4 mb-4">
      <h1 className="text-4xl mb-6">Contact</h1>

      <section className="text-xl mb-6" style={{ maxWidth: '60ch' }}>
        <p className="mb-4">Looking for mentoring? Career-change advice?</p>
        <p className="mb-4">
          Maybe you’re up for a collab on the gram? On YouTube? Or would like to
          stream some code with me, or record a podcast?
        </p>
        <p>
          Whichever the case, the form below is the guaranteed way to reach me!
          So, go for it 😄
        </p>
      </section>

      <Form />
    </div>

    <div className="bg-teal-100">
      <Signup
        prompt={
          <>
            If you’d rather <strong>I</strong> get in touch, proactively, you
            should subscribe to my newsletter!
          </>
        }
      />
    </div>
  </main>
)
