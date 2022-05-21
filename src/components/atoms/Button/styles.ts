import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Button = styled.button`
  background: ${colors.pink};
  border: 0;
  border-bottom: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  box-shadow: 0 4px 8px ${colors.gray};
  color: ${colors.white};
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 12px 24px;

  :hover {
    opacity: 0.9;
  }

  &[disabled] {
    cursor: initial;
    opacity: 0.5;
  }
`;
