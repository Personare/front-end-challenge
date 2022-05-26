import React from 'react';
import Head from 'next/head';
import type { NextPage, GetServerSideProps } from 'next';

import HomeTemplate from 'components/templates/Home';
import { CardsProps } from 'components/organisms/Cards';

const Home: NextPage = (props: CardsProps) => {
  return (
    <>
      <Head>
        <title>Tarot</title>
      </Head>
      <HomeTemplate {...props} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/cards`);
  const data = await response.json();

  return {
    props: data,
  };
};

export default Home;
