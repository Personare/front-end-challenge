import styled from "styled-components";

const HomeContainer = styled.main`
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
    margin: 15px 10px;
  }
`;

export {
  HomeContainer,
  CardsContainer
};
