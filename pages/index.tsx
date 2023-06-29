import Head from 'next/head';
import Global from './Layout';

// components
import Nav from '../components/Header';

// styles
import helpers from '../styles/helpers/_helpers.module.scss';
import global from '../styles/helpers/_helpers.global-font-styles.module.scss';

export default function Home() {
  return (
    <Global>
      <>
        <Head>
          <title>Sarah</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={`${helpers.container} ${helpers['height-100']} ${global.styles}`}>
          <main>
            <Nav />
          </main>
        </div>

        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
        `}</style>
      </>
    </Global>
  )
}
