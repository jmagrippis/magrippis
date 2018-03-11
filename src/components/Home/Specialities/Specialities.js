import React, { PureComponent } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { LinearProgress } from 'material-ui/Progress'
import styled from 'styled-components'

import Speciality from './Speciality/Speciality'

const Loader = styled(LinearProgress)`
  width: 100%;
`
export class Specialities extends PureComponent {
  render() {
    const {
      allSpecialitiesQuery: { allSpecialities, loading, refetch }
    } = this.props
    if (loading) {
      return <Loader />
    }

    return (
      <section>
        {allSpecialities &&
          allSpecialities.map(speciality => (
            <Speciality
              key={speciality.id}
              refresh={() => refetch()}
              {...speciality}
            />
          ))}
      </section>
    )
  }
}

const ALL_SPECIALITIES_QUERY = gql`
  query AllSpecialitiesQuery {
    allSpecialities(orderBy: order_ASC) {
      id
      name
      description
      icon
      tags {
        id
        name
      }
    }
  }
`

export default graphql(ALL_SPECIALITIES_QUERY, {
  name: 'allSpecialitiesQuery',
  options: { fetchPolicy: 'cache-and-network' }
})(Specialities)
