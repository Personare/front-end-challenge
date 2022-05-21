import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';

import HomeTemplate from 'components/templates/Home';

const Home: NextPage = props => {
  return <HomeTemplate {...props} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/cards`);
  const data = await response.json();

  return {
    props: data,
  };
};

export default Home;
