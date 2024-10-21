import { ThemeProvider } from 'next-themes';
import type { AppProps } from "next/app";

// components
import PageWithTransition from '../components/PageWithTransition';

// styles
import colors from '../styles/variables/_variables.color.module.scss';

function MyApp( pageProps: AppProps) {
  return (
    <>
      <ThemeProvider>
        <PageWithTransition {...pageProps} />
        <div className="bg"></div>
      </ThemeProvider>
      <style jsx global>{`
        :root {
          --caret-size-0: 150px;
          --caret-size-1: 100px;

          --timing-background: 550ms;
          --timing-forefront: 255ms;

          --z-index-foreground-0: 2;
          --z-index-background-0: 1;
          --z-index-background-1: 0;
          --z-index-background-2: -1;
          --z-index-background-3: -2;
        }

        :root[data-theme="dark"] {
          --color-border-primary: ${colors['offBlack']};
          --color-text-primary: ${colors['gray']};
          --color-nav-text-primary: ${colors['white']};
          --color-background: ${colors['offBlack']};
          --color-background-translucent: rgb(34, 35, 35, .95);
          --color-hr: ${colors['lightGray']};
          --color-theme-interior-text: '${colors['white']}';
          --color-link-style-background: ${colors['gray']};
          --color-link-style-background-hov: ${colors['gray']};
          --color-link-style-text: ${colors['lightGray']};
          --color-link-style-text-hov: ${colors['darkTeal']};
        }

        :root[data-theme="light"] {
          --color-border-primary: ${colors['white']};
          --color-text-primary: ${colors['offBlack']};
          --color-nav-text-primary: ${colors['lightGray']};
          --color-background: ${colors['white']};
          --color-background-translucent: rgb(255, 255, 255, .95);
          --color-theme-interior-text: ${colors['offBlack']};
          --color-hr: ${colors['darkTeal']};
          --color-link-style-background: ${colors['gray']};
          --color-link-style-background-hov: ${colors['darkTeal']};
          --color-link-style-text: ${colors['darkTeal']};
          --color-link-style-text-hov: ${colors['lightGray']};
        }

        html {
          margin: 0;
          padding: 0;
          background-color: var(--color-background);
          height: 100vh;
          font-size: 16px;
          letter-spacing: 1px;
          transition: background-color var(--timing-background) ease-in-out};
        }

        body {
          position: fixed;
          margin: 0;
        }

        @media print {
          body {
            position: unset;
          }
        }

        .bg {
          position: fixed;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          height: 200vh;
          width: 200%;
          margin: 0;
          background: transparent url('/portfolio/noise-transparent.png') repeat 0 0;
          background-repeat: repeat;
          animation: bg-animation .25s infinite;
          opacity: .9;
          pointer-events: none;
          visibility: visible;
          z-index: var(--z-index-background-0);

          @media print {
            background: transparent;
          }
        }

        @keyframes bg-animation {
          0% { transform: translate(0,0) }
          10% { transform: translate(-5%,-5%) }
          20% { transform: translate(-10%,5%) }
          30% { transform: translate(5%,-10%) }
          40% { transform: translate(-5%,15%) }
          50% { transform: translate(-10%,5%) }
          60% { transform: translate(15%,0) }
          70% { transform: translate(0,10%) }
          80% { transform: translate(-15%,0) }
          90% { transform: translate(10%,5%) }
          100% { transform: translate(5%,0) }
        }
      `}</style>
    </>
  )
}

export default MyApp;
