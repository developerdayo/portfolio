import { useState, useEffect, useRef } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

// styles
import transitions from '../styles/components/PageWithTransition.module.scss';

const PageWithTransition = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const prevScreen = useRef(Component);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const handler = () => {
      setTransitioning(true);
      setTimeout(() => {
        prevScreen.current = Component;
        setTransitioning(false);
      }, 280);
    };

    router.events.on('routeChangeComplete', handler);

    return () => {
      router.events.off('routeChangeComplete', handler);
    };
  }, [Component, router.events]);

  const Loading = () => <div className={!transitioning ? `${transitions['animate-page-enter']}` : `${transitions['animate-page-exit']}`}></div>;
  const Screen = !transitioning ? Component : Loading;

  return (
    <div className={!transitioning ? `${transitions['animate-page-enter']}` : `${transitions['animate-page-exit']}`}>
      <Screen {...pageProps} />
    </div>
  );
};

export default PageWithTransition;
