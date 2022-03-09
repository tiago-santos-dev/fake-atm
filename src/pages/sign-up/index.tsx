import React from 'react';
import Head from 'next/head';
import { Footer } from '@components/Unsigned/Footer';
import { Header } from '@components/Unsigned/Header';
import { Container } from '@styles/pages/sign-in';
import { NextPage } from 'next';
import SignUpForm from '@/components/Form/Signup';
import { SignInButton } from '@/styles/pages/sign-up';

const SignUp: NextPage = () => (
  <Container>
    <Head>
      <title>Fake ATM | Sign-up</title>
    </Head>
    <Header />
    <SignUpForm />
    <SignInButton text="Já tenho cadastro" />
    <Footer />
  </Container>
);

export default SignUp;
