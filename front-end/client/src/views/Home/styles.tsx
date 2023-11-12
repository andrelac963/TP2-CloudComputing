import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 30rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  height: 3rem;

  display: flex;
  align-items: center;

  font-size: 1rem;
  color: #757575;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 1rem;

  color: #333;
  border: 2px solid #dcdce6;
  border-radius: 0.5rem;
`;

export const Button = styled.button`
  width: 20rem;
  max-width: 100%;
  height: 3rem;
  margin-top: 2rem;
  align-self: center;

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
