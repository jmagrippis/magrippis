import React, { PureComponent } from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import Specialities from './Specialities/Specialities'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`

const Intro = styled.div`
  max-width: 420px;
`

class Home extends PureComponent {
  render() {
    return (
      <Container>
        <Intro>
          <Typography component="p" variant="subheading" paragraph>
            I have amassed enough skills, played with enough tools and overheard
            enough <strong>hot keywords</strong> for an autocomplete input field
            to make sense here!
          </Typography>
          <Typography component="p" variant="subheading" paragraph>
            Search for what you think is most relevant to your project, or just
            go through every one of my specialities.
          </Typography>
        </Intro>
        <Specialities />
      </Container>
    )
  }
}

export default Home
