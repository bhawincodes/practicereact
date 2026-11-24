import { useEffect, useState } from 'react'
import { getJson } from '../api'

export function useApi(path) {
  const [state, setState] = useState({
    status: 'loading',
    data: null,
    error: null,
  })

  useEffect(() => {
    let cancelled = false

    getJson(path)
      .then((data) => {
        if (!cancelled) {
          setState({ status: 'ready', data, error: null })
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setState({ status: 'error', data: null, error })
        }
      })

    return () => {
      cancelled = true
    }
  }, [path])

  return state
}
