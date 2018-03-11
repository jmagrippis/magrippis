import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

jest.mock('react-apollo', () => ({ graphql: () => fn => fn }))
jest.mock('graphql-tag', () => jest.fn())

it('renders without crashing', () => {
  shallow(<App />)
})
