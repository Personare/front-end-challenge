import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "image action";
  grid-template-columns: 50% minmax(auto, 50%);
  grid-template-rows: 100vh;

  @media (max-width: 768px) {
    grid-template-areas: "action" "image";
    grid-template-columns: 1fr;
    grid-template-rows: minmax(50vh, 1fr) 1fr;
  }
`;

export const ImageContainer = styled.div<{ src: string }>`
  background: ${({ src }) => `url(${src})`} no-repeat;
  background-size: cover;
  grid-area: image;
`;

export const Image = styled.img`
  max-width: 100%;
  display: block;
`;

export const ButtonContainer = styled.div`
  grid-area: action;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 40px 0;
  }
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
