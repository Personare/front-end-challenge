import React, { MouseEvent, useState } from 'react';

import Button from 'components/atoms/Button';
import Cards, { CardsProps } from 'components/organisms/Cards';

import * as S from './styles';

const Home = (props: CardsProps) => {
  const [disabled, setDisabled] = useState(true);

  function handleClickButton(e: MouseEvent<HTMLButtonElement>) {
    setDisabled(false);
    e.currentTarget.disabled = true;
  }

  return (
    <S.Page>
      <S.Main>
        <S.Title>Tarot</S.Title>

        <S.Box>
          <Button text="Iniciar o jogo" onClick={handleClickButton} />
        </S.Box>

        <S.Box>
          <S.Text>Selecione uma carta do baralho abaixo</S.Text>

          <S.CardsWrapper>
            <Cards disabled={disabled} data={{ ...props }} />
          </S.CardsWrapper>
        </S.Box>
      </S.Main>
    </S.Page>
  );
};

export default Home;
