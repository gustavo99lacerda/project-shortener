import { useHistory, useLocation } from 'react-router-dom'

export function useRouter() {

  return {
    path: useLocation(),
    history: useHistory()
  }
}
