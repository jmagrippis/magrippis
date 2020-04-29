import React, { ReactNode } from 'react'

import { useCyclingElement } from './useCyclingElement'

type Props = {
  elements: ReactNode[]
}

export const CyclingElement = ({ elements }: Props) => {
  const selectedElement = useCyclingElement({ elements })

  return <div>{selectedElement}</div>
}
