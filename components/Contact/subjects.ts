export enum Subject {
  Mentoring = 'mentoring',
  CodingChallenges = 'coding-challenges',
  CareerAdvice = 'career-advice',
  Workshop = 'workshop',
  Streaming = 'streaming',
  Podcast = 'podcast',
  Photography = 'photography',
  Gaming = 'gaming',
  BeachVolleyball = 'beach-volleyball',
  Other = 'other',
}

type SubjectType = {
  display: string
  value: Subject
}

export const isSubject = (value: string | Subject): value is Subject =>
  Object.values(Subject).includes(value as Subject)

export const subjects: SubjectType[] = [
  { display: 'Mentoring', value: Subject.Mentoring },
  { display: 'Coding Challenges', value: Subject.CodingChallenges },
  { display: 'Career Advice', value: Subject.CareerAdvice },
  { display: 'Workshop', value: Subject.Workshop },
  { display: 'Streaming', value: Subject.Streaming },
  { display: 'Podcast', value: Subject.Podcast },
  { display: 'Photography', value: Subject.Photography },
  { display: 'Gaming', value: Subject.Gaming },
  { display: 'Beach Volleyball', value: Subject.BeachVolleyball },
  { display: 'Other', value: Subject.Other },
]
