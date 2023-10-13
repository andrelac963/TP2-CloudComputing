import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 20rem;
  padding: 2rem;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.6);
  background-color: #fff;
`;

export const Text = styled.h2`
  font-size: 1rem;
  text-align: center;
  color: #801245;
`;

export const Button = styled.button`
  width: 10rem;
  height: 2rem;

  background-color: #5d5c49;
  border: 0;
  border-radius: 0.5rem;

  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 1rem;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(90%);
  }
`;
