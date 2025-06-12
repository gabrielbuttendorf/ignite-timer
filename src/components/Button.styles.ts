import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'sucess' | 'danger';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const ButtonVariants = {
  primary: 'purple',
  secondary: 'orange',
  sucess: 'green',
  danger: 'red',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 42px;

  ${props => `background-color: ${ButtonVariants[props.variant]}`}
`