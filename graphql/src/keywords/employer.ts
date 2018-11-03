export const employer = [
  {
    name: 'Triptease',
    description:
      'Ambitious London startup disrupting the travel industry. A company full of hustle and obsessive learners.'
  },
  {
    name: 'Docnet',
    description:
      'The "e-commerce experts", gracefully handling an eye-watering amount of traffic across all their clients.'
  },
  {
    name: 'Digital Academy',
    description:
      'A focused group with a remarkable ability to land exciting, often government-subsidized, app development contracts.'
  },
  {
    name: 'iProject',
    description:
      'Non-compromising company going for style **and** substance with their proprietary CRM/CMS platform, Echo.'
  }
].map(employer => ({ category: 'employer', ...employer }))
