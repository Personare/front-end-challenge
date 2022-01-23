import styled, { css } from "styled-components";

interface ImageProps {
  isMinimal?: boolean;
}
export const Image = styled.img<ImageProps>`
  ${({ isMinimal }) => css`
    height: ${isMinimal ? "150px" : "300px"};
    width: ${isMinimal ? "79px" : "auto"};
    margin-bottom: ${isMinimal ? "10px" : "auto"};
  `}
`;

export const Container = styled.div``;
