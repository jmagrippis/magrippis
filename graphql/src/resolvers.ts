const keywords = [
  {
    name: 'Typescript',
    description:
      'So hot right now. Javascript is everywhere and Typescript makes it a bit nicer, easier and safer, as well as your IDE a great deal smarter to boot.',
    category: 'language'
  },
  {
    name: 'GraphQL',
    description:
      'Empower clients to ask for exactly what they need and get only that. Obfuscate any complexity in the GraphQL server layer and never have a breaking release again!',
    category: 'stack'
  },
  {
    name: 'Triptease',
    description:
      'Ambitious London startup disrupting the travel industry. Helps hoteliers promote the message "Direct is best". A company full of obsessive learners.',
    category: 'employer'
  },
  {
    name: 'Agent Portal',
    description:
      'Inbox-style client admin interface to manage hotel guest conversations',
    category: 'project'
  }
]

export const resolvers = {
  Query: {
    keywords: () => keywords,
    keyword: (_, args) => keywords.find(({ name }) => name === args.name)
  }
}
