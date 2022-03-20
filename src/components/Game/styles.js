import styled from "styled-components";

const GameContainer = styled.main`
  margin: 35px auto;
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
  max-width: 780px;
  margin-top: 30px;

  img {
    height: 230px;
    width: 109.26px;
    margin: 15px 10px;
  }
`;

export {
  GameContainer,
  CardsContainer
};
