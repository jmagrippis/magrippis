import React from 'react'

import { CyclingElement } from '../../../../../components/CodingChallenges/2020/CyclingElement/CyclingElement'
import { CyclingNotice } from '../../../../../components/CodingChallenges/2020/CyclingElement/CyclingNotice'
import { CyclingCTA } from '../../../../../components/CodingChallenges/2020/CyclingElement/CyclingCTA'

const firstElements = [
  'hello, world!',
  'how are you doing today?',
  'hope you are enjoying the stream!',
]

const secondElements = [
  'added cycling functionality',
  'added terminal window view to code view',
]

const handleClick = () => {}

export default () => (
  <>
    <CyclingElement elements={firstElements} />
    <CyclingNotice elements={secondElements} />
    <CyclingCTA handleClick={handleClick} />
  </>
)
