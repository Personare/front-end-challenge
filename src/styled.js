import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;
export const AppCointainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 20%;
  }
  h1 {
    color: #FF0000;
  }
`;
