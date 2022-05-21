import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Page = styled.div`
  display: grid;
  grid-template-columns: [full-start] 24px [main-start] auto [main-end] 24px [full-end];

  @media screen and (min-width: 768px) {
    grid-template-columns: [full-start] 32px [main-start] auto [main-end] 32px [full-end];
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: [full-start] 1fr [main-start] 755px [main-end] 1fr [full-end];
  }
`;

export const Main = styled.main`
  grid-column: main;
  padding-top: 48px;
`;

export const Title = styled.h1`
  color: ${colors.blue};
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Box = styled.div`
  background: ${colors.white};
  box-shadow: 2px 2px 8px ${colors.gray};
  display: flex;
  justify-content: center;
  margin-top: 48px;
  padding: 24px 16px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 32px 48px;
  }

  @media screen and (min-width: 1024px) {
    padding: 32px 24px;
  }
`;

export const Text = styled.span`
  color: ${colors.blue};
  display: block;
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
`;
