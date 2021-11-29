import { ButtonHTMLAttributes } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  typeButton?: "return";
};

export const Button: React.FC<ButtonProps> = ({ typeButton, children, ...rest }) => {
  
  switch (typeButton) {
    case 'return': return (
      <Container {...rest} bg="#007871"> 
        <IoMdReturnLeft />
        <span style={{ marginLeft: "3px" }}>
          {children ?? "Voltar"}
        </span>
      </Container>
    );
    default: return (
      <Container {...rest}> 
        <IoMdReturnLeft />
        <span style={{ marginLeft: "3px" }}>
          {children ?? "Enviar"}
        </span>
      </Container>
    );
  } 
}