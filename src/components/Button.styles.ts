import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'sucess' | 'danger';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 42px;
  border: 0;
  margin: 0.4rem;
  border-radius: 4px;

  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};
`