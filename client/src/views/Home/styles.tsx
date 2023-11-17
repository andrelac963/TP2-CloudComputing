import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;

  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  height: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
`;

export const Label = styled.label`
  height: 3rem;
  margin-left: 0.2rem;

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

export const ButtonContainer = styled.div`
  flex: 1;
`;

export const Button = styled.button`
  width: 20rem;
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

export const SongListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 2;
`;

export const SongList = styled.ul`
  width: 20rem;
  height: 10rem;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: white;

  overflow-y: auto;
  overflow-x: hidden;

  border: 2px solid #dcdce6;
  border-radius: 0.5rem;
`;
