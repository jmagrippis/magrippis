import { ReactNode, useState, useEffect } from 'react'

type Arguments = {
  elements: ReactNode[]
  intervalMs?: number
}

const DEFAULT_INTERVAL = 1000

export const useCyclingElement = ({
  elements,
  intervalMs = DEFAULT_INTERVAL,
}: Arguments) => {
  const [remainingElements, setRemainingElements] = useState(elements)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRemainingElements(([_droppedElement, ...restElements]) =>
        restElements.length ? restElements : elements
      )
    }, intervalMs)

    return () => {
      clearTimeout(timeout)
    }
  })

  return remainingElements[0]
}
