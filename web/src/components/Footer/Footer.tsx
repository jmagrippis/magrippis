import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Favorite } from './favorite.svg'

const Container = styled.footer`
  display: flex;
  align-items: center;
`

const StyledFavorite = styled(Favorite)`
  width: 24px;
  fill: #acfcd9;
  margin: 0 5px;
`

export const Footer = () => (
  <Container>
    Made with <StyledFavorite /> in London
  </Container>
)
