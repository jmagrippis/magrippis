import React, { PureComponent } from 'react'
import styled from 'styled-components'
import memoize from 'memoize-one'

import { ReactComponent as ArrowBack } from './arrowBack.svg'
import { ReactComponent as ArrowForward } from './arrowForward.svg'

import { Keyword } from '../../../types'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 24px;
`

const StyledArrowBack = styled(ArrowBack)`
  cursor: pointer;
  width: 24px;
  fill: currentColor;
`

const StyledArrowForward = styled(ArrowForward)`
  cursor: pointer;
  width: 24px;
  fill: currentColor;
`

const Button = styled.button`
  background-color: #93827f;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`

type Props = {
  keywords: Keyword[]
  onKeywordClick: (name: string) => void
}

type State = {
  shuffledKeywords: Keyword[]
  index: number
}

const shuffleArray = memoize((array: any[]) => {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
})

export class Question extends PureComponent<Props, State> {
  state = {
    shuffledKeywords: shuffleArray(this.props.keywords),
    index: 0
  }

  cycleKeyword = (offset: number) => {
    this.setState(({ shuffledKeywords, index }) => {
      const maxIndex = shuffledKeywords.length - 1
      const nextIndex = index + offset

      if (nextIndex < 0) {
        return { index: maxIndex }
      }

      if (nextIndex > maxIndex) {
        return { index: 0 }
      }

      return { index: nextIndex }
    })
  }

  nextKeyword = this.cycleKeyword.bind(undefined, 1)

  prevKeyword = this.cycleKeyword.bind(undefined, -1)

  onKeywordClick = () => {
    const { onKeywordClick } = this.props
    const { shuffledKeywords, index } = this.state

    onKeywordClick(shuffledKeywords[index].name)
  }

  render() {
    const { shuffledKeywords, index } = this.state
    return (
      <Container>
        <StyledArrowBack onClick={this.prevKeyword}>{'<'}</StyledArrowBack>
        <Button onClick={this.onKeywordClick}>
          {shuffledKeywords[index].name}
        </Button>
        <StyledArrowForward onClick={this.nextKeyword}>></StyledArrowForward>
      </Container>
    )
  }
}
