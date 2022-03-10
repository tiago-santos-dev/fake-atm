import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import Button from '@/components/UI/Button';
import { Container, Content } from '@/styles/pages/home';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Fake ATM | Home</title>
    </Head>
    <Header />
    <Content>
      <Link href="/new-operation">
        <Button text="Nova operação" />
      </Link>
    </Content>
    <Footer />
  </Container>
);

export default Home;
