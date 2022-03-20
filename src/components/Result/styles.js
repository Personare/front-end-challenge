import styled from "styled-components";

const ResultContainer = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-left: 30px;
    max-width: 300px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-top: 20px;
    font-size: 2rem;
    font-weight: 700;
  }
`;

export {
  ResultContainer,
  CardContainer
};
