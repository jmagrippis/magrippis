export const project = [
  {
    name: 'Front Desk',
    description:
      'Real-time chat widget, fine-tuned to enable the optimal hotel booking experience.'
  },
  {
    name: 'Agent Portal',
    description:
      'Google Inbox-style admin interface, helping hotel agents manage their online guest conversations'
  },
  {
    name: 'Nudge Message',
    description:
      'Onsite guidance and marketing widget, designed mobile-first to be subtle but effective.'
  }
].map(project => ({ category: 'project', ...project }))
