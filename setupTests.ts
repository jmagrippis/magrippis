import '@testing-library/jest-dom/extend-expect'

// workaround for next/image:
// https://github.com/vercel/next.js/issues/18415
process.env = {
  ...process.env,
  // @ts-ignore
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['images.example.com'],
    path: '/_next/image',
    loader: 'default',
  },
}
