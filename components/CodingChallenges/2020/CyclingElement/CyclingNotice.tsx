import { ReactNode } from 'react'

import { Notice } from '../../../Notice/Notice'
import { useCyclingElement } from './useCyclingElement'

type Props = {
  elements: ReactNode[]
}

export const CyclingNotice = ({ elements }: Props) => {
  const selectedElement = useCyclingElement({ elements, intervalMs: 10000 })

  return <Notice>{selectedElement}</Notice>
}
