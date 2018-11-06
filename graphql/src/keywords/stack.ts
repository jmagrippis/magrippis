export const stack = [
  {
    name: 'GraphQL',
    description:
      'Empower API consumers to ask and get **exactly** what they need. Obfuscate complexity in the GraphQL server layer and never have a breaking release again!'
  },
  {
    name: 'AWS',
    description:
      'Comprehensive suite fighting against Google Cloud Platform for "cloud solutions" supremacy.'
  },
  {
    name: 'Google Cloud Platform',
    description:
      'Awesome cloud tools that only sometimes change in a breaking way or are abandoned forever.'
  },
  {
    name: 'Kubernetes',
    description: 'Google App Engine for grownups.'
  },
  {
    name: 'Jenkins',
    description: 'More like Jerkins, amirite.'
  }
].map(stack => ({ category: 'stack', ...stack }))
