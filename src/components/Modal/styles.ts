import styled from "styled-components";

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 15px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30;
`;

export const Content = styled.div`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 350px;
`;

export const Name = styled.h3`
  font-size: 20px;
  line-height: 1;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.25;
  text-align: justify;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 5px;
  line-height: 1;
  font-size: 24px;
  padding: 10px 10px;
  transition: color 200ms ease;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;
