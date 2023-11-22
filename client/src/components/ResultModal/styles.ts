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
  width: 30rem;
  max-width: 80%;
  padding: 3rem;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.6);
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ResultContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: center;
  gap: 1rem;

  border-radius: 0.5rem;
  border: 0.1rem solid #dcdbaf;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const TextBold = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  color: #801245;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #801245;
`;

export const Button = styled.button`
  width: 10rem;
  height: 2rem;
  padding: 0.5rem;
  margin-top: 1rem;

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
