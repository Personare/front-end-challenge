import React from 'react';

import * as S from './styles';

type Props = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ text, disabled, onClick }: Props) => {
  return (
    <S.Button disabled={disabled} onClick={onClick}>
      {text}
    </S.Button>
  );
};

export default Button;
