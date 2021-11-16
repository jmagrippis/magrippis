import '@testing-library/jest-dom/extend-expect'

// workaround for next/dynamic
// https://github.com/vercel/next.js/issues/5416
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null
  DynamicComponent.displayName = 'LoadableComponent'
  DynamicComponent.preload = jest.fn()
  return DynamicComponent
})
