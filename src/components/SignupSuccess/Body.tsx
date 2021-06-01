import { Notice } from 'components/Notice/Notice'

export const Body = () => (
  <main className="w-full flex-grow pt-4 bg-prism">
    <div className="max-w-prose text-xl m-auto p-4 mb-4">
      <h1 className="text-4xl leading-normal mb-6">Email confirmed</h1>

      <section className="mb-6">
        <p className="mb-2">
          Thank you kindly for signing up to my newsletter! This means I’ll be
          in touch with my weekly learnings, challenges, and curiosities...
          We’re gonna have fun! 🙌
        </p>

        <p className="mb-4">
          You should have received an email to confirm your address. Don’t
          forget to click the link there!
        </p>
        <Notice>
          Once you’re done, check out some{' '}
          <span className="underline text-purple-600 bg-opacity-75">
            blogposts
          </span>
          ! 😄
        </Notice>
      </section>
    </div>
  </main>
)
