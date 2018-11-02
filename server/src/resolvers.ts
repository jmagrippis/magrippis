const projects = [
  {
    name: 'Agent Portal',
    description:
      'Inbox-style client admin interface to manage hotel guest conversations'
  }
]

export const resolvers = {
  Query: {
    projects: () => projects
  }
}
