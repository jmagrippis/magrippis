import React, { PureComponent } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'

import { Question } from './Question/Question'
import { Response } from './Response/Response'
import { styles } from '../../styles'

const GET_KEYWORDS = gql`
  {
    keywords {
      name
    }
  }
`

const Container = styled.div`
  display: flex;
  ${({ flex }: { flex: string }) =>
    flex && 'flex: 1 0 auto;'} flex-direction: column;
  align-items: center;
  max-width: 700px;
  padding: 10px;
  transition: flex 1s ${styles.easeInOutQuad};
`

const Prompt = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

type Props = {}

type State = {
  requestedKeywordName: string
}

export class Body extends PureComponent<Props, State> {
  state = {
    requestedKeywordName: ''
  }

  onKeywordClick = (requestedKeywordName: string) => {
    this.setState({ requestedKeywordName })
  }

  render() {
    const { requestedKeywordName } = this.state

    return (
      <Query query={GET_KEYWORDS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          return (
            <Container flex={requestedKeywordName}>
              <Prompt>
                <div>Ask me about...</div>
                <Question
                  keywords={data.keywords}
                  onKeywordClick={this.onKeywordClick}
                />
              </Prompt>
              {requestedKeywordName && <Response name={requestedKeywordName} />}
            </Container>
          )
        }}
      </Query>
    )
  }
}
