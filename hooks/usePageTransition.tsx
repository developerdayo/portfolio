import type { NextComponentType, NextPageContext } from 'next'
import { useEffect, useRef, useState } from 'react'

import transitionsCss from '@styles/components/PageWithTransition.module.scss'

type LoadingProps = {
  enterClass: string
  exitClass: string
  isTransitioning: boolean
};

const Loading = ({ isTransitioning, enterClass, exitClass }: LoadingProps) => {
  return <div className={isTransitioning ? exitClass : enterClass}></div>
};

export default function usePageTransition(
  Component: NextComponentType<NextPageContext, any, any>,
  pageProps: object,
) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const transitionDuration = 280

  useEffect(() => {
    setIsTransitioning( true )
    
    const timeoutId = setTimeout(() => {
      setIsTransitioning( false )
      containerRef.current?.scrollTo(0, 0)
    }, transitionDuration)

    return () => clearTimeout( timeoutId )
  }, [Component])

  const Screen = isTransitioning ? (
    <Loading
      isTransitioning={ isTransitioning }
      enterClass={ transitionsCss['animate-page-enter'] }
      exitClass={ transitionsCss['animate-page-exit'] }
    />
  ) : (
    <Component {...pageProps} />
  )

  return { Screen, isTransitioning: isTransitioning, container: containerRef }
}
