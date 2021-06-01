import { Notice } from 'components/Notice/Notice'

export const Body = () => (
  <main className="w-full flex-grow pt-4 bg-prism">
    <div className="max-w-prose text-xl m-auto p-4 mb-4">
      <h1 className="text-4xl leading-normal mb-6">Email confirmed</h1>

      <section className="mb-6">
        <p className="mb-4">
          Thank you kindly for confirming your email & subscription to my
          newsletter! Catch you there 🙌
        </p>
        <Notice>
          In the meantime, check out some{' '}
          <span className="underline text-purple-600 bg-opacity-75">
            blogposts
          </span>
          ? 😄
        </Notice>
      </section>
    </div>
  </main>
)
