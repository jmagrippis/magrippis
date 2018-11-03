export const language = [
  {
    name: 'Javascript',
    description: "It's come a long way. And it's EVERYWHERE."
  },
  {
    name: 'Typescript',
    description:
      'So hot right now. The transpile-to-javascript language that\'s "won" by striking the best balance of enhancing vanilla vs. familiarity and setup faff.'
  },
  {
    name: 'Golang',
    description:
      'Pleasure to write and fast once running, still needs work on things like dependency management.'
  }
].map(language => ({ category: 'language', ...language }))
