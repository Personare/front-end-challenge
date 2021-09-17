import styled from "styled-components";

export const List = styled.div`
  align-items: center;
  display: grid;
  gap: 20px;
  width: 100%;

  flex-direction: column;
  grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));

  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;
