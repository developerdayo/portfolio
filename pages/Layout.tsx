import { useRouter } from 'next/router';
import Cursor from '../components/Cursor';
import colors from '../styles/variables/_variables.color.module.scss';

type Props = {
  children: JSX.Element
};

const RenderCursor = () => {
  const router = useRouter();
  if (router.pathname === '/') {
    return <Cursor />;
  }
}

export default function Global({ children }: Props) {

  return (
    <>
      {children}
      {RenderCursor()}
      <style jsx global>{`
        #__next, main {
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        h1,
        h2,
        p,
        span,
        ul {
          position: relative;
          margin: 0;
          z-index: var(--z-index-foreground-0);
        }

        ul {
          padding: 0;
          list-style: none;
        }

        main {
          position: relative;
        }

        code {
          background: ${colors['gray']};
          border-radius: 5px;
          color: ${colors['offBlack']};
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
    </>
  )
}
