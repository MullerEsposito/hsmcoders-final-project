import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ 
  children, ...rest }) => {
  return (
    <Container> 
      <label htmlFor="">{children}</label>
      <input type="text" {...rest} />
    </Container>
  )
}