import { Footer } from '@components/Unsigned/Footer'
import { Header } from '@components/Unsigned/Header'
import Head from 'next/head'
import React from 'react'
import { Container } from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Fake ATM | Sign In</title>
      </Head>
      <Header />
      <div></div>
      <Footer />

    </Container>
  )
}

export default SignIn
