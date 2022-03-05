import type { NextPage } from 'next'
import Head from 'next/head'

import logo from '@assets/logo.svg'
const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Fake ATM</title>
      </Head>
      <main>
        <img src={logo} alt="ts corretora" />
      </main>
    </div>
  )
}

export default Home
