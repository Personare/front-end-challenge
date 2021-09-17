import styled from "styled-components";

export const Container = styled.div`
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PlayButton = styled.button`
  padding: 15px 60px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #ef4e17;
  color: #fff;
  font-weight: 700;
  margin-bottom: 40px;

  &:hover {
    cursor: pointer;
    background-color: rgba(239, 78, 23, 0.8);
  }
`;

export const Message = styled.p`
  padding: 15px 60px;
  margin-bottom: 40px;
  font-size: 20px;
`;
