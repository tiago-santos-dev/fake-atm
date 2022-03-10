import React from 'react';
import Head from 'next/head';
import { Footer } from '@components/Unsigned/Footer';
import { Header } from '@components/Unsigned/Header';
import {
  Container,
  SignUpButton,
  SignUpContainer
} from '@styles/pages/sign-in';
import { NextPage } from 'next';
import SignInForm from '@/components/Form/SignIn';
import Link from 'next/link';

const SignIn: NextPage = () => (
  <Container>
    <Head>
      <title>Fake ATM | Sign-in</title>
    </Head>
    <Header />
    <SignInForm />
    <SignUpContainer>
      <p>Não é cadastrado?</p>
      <Link href="/sign-up">
        <SignUpButton text="Cadastre-se agora" />
      </Link>
    </SignUpContainer>
    <Footer />
  </Container>
);

export default SignIn;
