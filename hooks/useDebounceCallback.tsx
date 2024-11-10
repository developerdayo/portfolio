import { useCallback, useRef } from 'react'

export default function useDebouncedCallback(callback: (...args: any[]) => void, delay: number) {
  const timeoutRef = useRef<number | null>(null)

  const debouncedCallback = useCallback((...args: any[]) => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])

  return debouncedCallback;
}