import styled from "styled-components";

const GameContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 35px auto;
  max-width: 780px;

  img {
    height: 230px;
    margin: 15px 10px;
  }
`;

export {
  GameContainer,
  CardsContainer
};
