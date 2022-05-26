import styled from 'styled-components';

type CardWrapperProps = {
  disabled: boolean;
};

export const Cards = styled.ul`
  list-style: none;
  margin-top: 70px;
  position: relative;
  width: 96%;
`;

export const CardWrapper = styled.li<CardWrapperProps>`
  display: inline-block;
  margin-right: -36px;
  margin-top: -70px;
  position: relative;
  transition: transform 0.2s ease;

  :hover {
    transform: ${({ disabled }) =>
      !disabled && 'translate(0px, -15px) rotate(10deg)'};
  }
`;
