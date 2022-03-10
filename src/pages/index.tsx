import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { Container, Content } from '@/styles/pages/home';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Fake ATM | Home</title>
    </Head>
    <Header />
    <Content />
    <Footer />
  </Container>
);

export default Home;
