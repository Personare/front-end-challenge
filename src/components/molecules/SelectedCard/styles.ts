import styled, { keyframes } from 'styled-components';
import { colors } from 'styles/variables';

const FrontCardAnimation = keyframes`
  0% { transform: perspective(200px) rotateY(-180deg); }
  100% { transform: perspective(200px) rotateY(0deg); }
`;

const BackCardAnimation = keyframes`
  0% { transform: perspective(200px) rotateY(0deg); }
  100% { transform: perspective(200px) rotateY(180deg); }
`;

export const SelectedCard = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.gray};
  box-shadow: 2px 2px 8px ${colors.gray};
  height: 350px;
  filter: drop-shadow(0px 0px 230px ${colors.black});
  left: calc(50% - 87.5px);
  position: fixed;
  top: calc(50% - 160px);
  width: 175px;
`;

const CardFace = styled.div`
  backface-visibility: hidden;
  height: inherit;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

export const FrontCardWrapper = styled(CardFace)`
  align-items: center;
  animation: ${FrontCardAnimation} 0.6s forwards;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const BackCardWrapper = styled(CardFace)`
  animation: ${BackCardAnimation} 0.6s forwards;
`;

export const SelectedCardImageWrapper = styled.div`
  height: 210px;
  width: 100px;
`;

export const SelectedCardName = styled.h4`
  color: ${colors.blue};
  display: block;
  font-size: 16px;
  font-weight: 700;
  margin-top: 14px;
  text-align: center;
`;

export const SelectedCardDescription = styled.p`
  font-family: 'Open sans', sans-serif;
  font-size: 12px;
  margin-top: 8px;
  text-align: center;
`;
