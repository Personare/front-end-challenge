import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% minmax(auto, 50%);
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  max-width: 100%;
  height: 100vh;
  display: block;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1``;

export const Subtitle = styled.p`
  margin: 15px 0 30px 0;
  font-size: 12px;
`;

export const PlayButton = styled.button`
  padding: 15px 60px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #2e3f61;
  color: #fff;
  font-weight: 700;
  transition: background-color 300ms ease;

  &:hover {
    cursor: pointer;
    background-color: rgba(46, 63, 97, 0.8);
  }
`;
