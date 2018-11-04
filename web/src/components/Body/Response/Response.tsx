import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled, { keyframes } from 'styled-components'

import { styles } from '../../../styles'

const GET_KEYWORD = gql`
  query Keyword($name: String!) {
    keyword(name: $name) {
      description
    }
  }
`

const appear = keyframes`
  from {
    opacity: 0;
    flex: 0 0 auto;
  }

  to {
    opacity: 1;
    flex: 4 0 auto;
  }
`

const Container = styled.div`
  display: flex;
  flex: 4 0 auto;
  align-items: center;
  color: #acfcd9;
  animation: ${appear} 1s ${styles.easeInOutQuad};
`

type Props = {
  name: string
}

export const Response = ({ name }: Props) => (
  <Container>
    <Query query={GET_KEYWORD} variables={{ name }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return data.keyword.description
      }}
    </Query>
  </Container>
)
