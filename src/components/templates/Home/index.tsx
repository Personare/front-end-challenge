import React from 'react';

import Button from 'components/atoms/Button';

import * as S from './styles';

const Home = () => {
  return (
    <S.Page>
      <S.Main>
        <S.Title>Tarot</S.Title>

        <S.Box>
          <Button text="Iniciar o jogo" />
        </S.Box>

        <S.Box>
          <S.Text>Selecione uma carta do baralho abaixo</S.Text>
        </S.Box>
      </S.Main>
    </S.Page>
  );
};

export default Home;
