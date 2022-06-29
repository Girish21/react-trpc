import * as React from 'react'
import { flushSync } from 'react-dom'

export function useFetch<T>(url: string, options?: RequestInit): T | null {
  const [state, setState] = React.useState<T | null>(null)
  const abortController = React.useRef<AbortController | null>(null)

  React.useEffect(() => {
    if (abortController.current) {
      abortController.current.abort()
    }
    abortController.current = new AbortController()

    async function handleFetch() {
      flushSync(() => setState(null))
      const data = await fetch(url, {
        ...(options && { options }),
        mode: 'cors',
        signal: abortController.current?.signal,
        method: 'get',
      }).then(res => res.json())
      setState(data)
    }
    handleFetch()

    return () => {
      abortController.current?.abort()
      abortController.current = null
    }
  }, [url, options])

  return state
}
