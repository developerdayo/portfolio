import clsx from 'clsx';

import { AppProps } from 'next/app'

import { usePageTransition } from '@hooks/index'

import transitionsCss from '@styles/components/PageWithTransition.module.scss'

const PageWithTransition = ({ Component, pageProps }: AppProps) => {
  const { Screen, isTransitioning, container } = usePageTransition(Component, pageProps);

  return (
    <main
      ref={ container }
      className={clsx(
        transitionsCss['animate-container'],
        isTransitioning
          ? transitionsCss['animate-page-exit']
          : transitionsCss['animate-page-enter']
      )}
    >
      { Screen }
    </main>
  );
};

export default PageWithTransition
