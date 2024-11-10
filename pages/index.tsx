import Head from 'next/head'

import GlobalLayout from '@pages/Layout'

export default function Home() {
  return (
    <GlobalLayout>
      <Head>
        <title>Sarah</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </GlobalLayout>
  )
}
