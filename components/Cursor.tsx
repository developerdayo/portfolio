import { useRef, useCallback } from 'react'

import { useDebounceCallback } from '@hooks/index'

import cursorCss from '@styles/components/Cursor.module.scss'

const spotlightSize = 'transparent 2%, rgba(0, 0, 0, .3) 100%';

const Cursor = () => {
  const spotlight = useRef<HTMLDivElement>(null)

  const updateSpotlight = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ( spotlight.current ) {
      const x = (e.pageX / window.innerWidth) * 100
      const y = (e.pageY / window.innerHeight) * 100
      spotlight.current.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, ${spotlightSize})`
    }
  }, [])

  const debouncedUpdate = useDebounceCallback(updateSpotlight, 100)

  return (
    <div
      ref={ spotlight }
      className={ cursorCss.spotlight }
      onMouseMove={ debouncedUpdate }
      onMouseDown={ debouncedUpdate }
      onMouseUp={ debouncedUpdate }
    />
  )
}

export default Cursor
