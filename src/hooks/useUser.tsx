import { useContext } from 'react'

import { UserFormContext } from '../contexts/UserFormProvider'

export function useUser() {
  return useContext(UserFormContext)
}