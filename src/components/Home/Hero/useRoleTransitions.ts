import { useState, useEffect } from 'react'
import { shuffle } from 'lodash'
import { useTransition } from 'react-spring'

import { allRoles } from './allRoles'

const RESELECT_INTERVAL = 3000

export const useRoleTransitions = () => {
  const [firstRole, ...otherRoles] = allRoles
  const [roles, setRoles] = useState([firstRole, ...shuffle(otherRoles)])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document?.hasFocus()) return

      setRoles((currentRoles) =>
        currentRoles.length > 1 ? currentRoles.slice(1) : shuffle(allRoles)
      )
    }, RESELECT_INTERVAL)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return useTransition(roles[0], null, {
    from: {
      opacity: 0,
      transform: 'translate3d(0,2rem,0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0,-2rem,0)',
    },
  })
}
