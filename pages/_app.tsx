import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import PageWithTransition from '@components/PageWithTransition'

import colorsCss from '@styles/variables/_variables.color.module.scss'

function MyApp(props: AppProps) {
  return (
    <>
      <ThemeProvider>
        <PageWithTransition {...props} />
        <div className="bg" />
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
          --color-border-primary: ${colorsCss['offBlack']};
          --color-text-primary: ${colorsCss['gray']};
          --color-nav-text-primary: ${colorsCss['white']};
          --color-background: ${colorsCss['offBlack']};
          --color-background-translucent: rgb(34, 35, 35, .95);
          --color-hr: ${colorsCss['lightGray']};
          --color-theme-interior-text: '${colorsCss['white']}';
          --color-link-style-background: ${colorsCss['gray']};
          --color-link-style-background-hov: ${colorsCss['gray']};
          --color-link-style-text: ${colorsCss['lightGray']};
          --color-link-style-text-hov: ${colorsCss['darkTeal']};
        }

        :root[data-theme="light"] {
          --color-border-primary: ${colorsCss['white']};
          --color-text-primary: ${colorsCss['offBlack']};
          --color-nav-text-primary: ${colorsCss['lightGray']};
          --color-background: ${colorsCss['white']};
          --color-background-translucent: rgb(255, 255, 255, .95);
          --color-theme-interior-text: ${colorsCss['offBlack']};
          --color-hr: ${colorsCss['darkTeal']};
          --color-link-style-background: ${colorsCss['gray']};
          --color-link-style-background-hov: ${colorsCss['darkTeal']};
          --color-link-style-text: ${colorsCss['darkTeal']};
          --color-link-style-text-hov: ${colorsCss['lightGray']};
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
