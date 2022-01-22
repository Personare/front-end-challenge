import styled, { css } from "styled-components";

export const List = styled.div<{ isPlaying: boolean }>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 20px 20px 50px;

  ${({ isPlaying }) => css`
    > div {
      margin-left: -30px;
      transition: 300ms ease transform, 300ms ease filter;
      cursor: ${isPlaying ? "pointer" : "default"};
      filter: ${isPlaying ? "saturate(50%)" : "auto"};

      &:hover {
        transform: translateY(-30px) rotateZ(5deg);

        filter: ${isPlaying ? "saturate(100%)" : "auto"};
      }
    }
  `}
`;
