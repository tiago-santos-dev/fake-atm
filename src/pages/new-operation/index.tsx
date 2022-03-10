import { Footer } from '@/components/Footer';
import NewOperationForm from '@/components/Form/New-operation';
import Header from '@/components/Header';
import { Container, Content } from '@/styles/pages/new-operation';
import type { NextPage } from 'next';
import Head from 'next/head';

const NewOperationPage: NextPage = () => (
  <Container>
    <Head>
      <title>Fake ATM | New Operation</title>
    </Head>
    <Header />
    <Content>
      <NewOperationForm />
    </Content>
    <Footer />
  </Container>
);

export default NewOperationPage;
