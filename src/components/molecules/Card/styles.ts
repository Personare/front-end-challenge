import styled from 'styled-components';

type CardProps = {
  width: string;
  height: string;
};

export const Card = styled.div<CardProps>`
  cursor: pointer;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;
