import styled from "styled-components";

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 780px;
  margin-top: 30px;

  & > img {
    height: 230px;
    width: 109.26px;
    margin: 15px 10px;
    cursor: ${({ gameOn }) => gameOn ? "pointer": "default"};
  }
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 109.26px;
  height: 230px;
  margin: 15px 10px;
  perspective: 1000px;

  img {
    height: 100%;
    width: 100%;
    cursor: ${({ gameOn }) => gameOn ? "pointer": "default"};
  }

  :hover > div {
    transform: rotateY(180deg);
  }

  & > div {
    transform: ${({ gameOn }) => gameOn ? "rotateY(180deg)": "none"};
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: all 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;


const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;


const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;


export {
  CardsContainer,
  FlipCard,
  FlipCardInner,
  CardFront,
  CardBack
};
