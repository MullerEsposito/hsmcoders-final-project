import { Container, Logo, Title } from './styles';

import logo from '../../assets/logo.png';

export function Header(): JSX.Element {
  return (
    <Container> 
      <Logo src={logo} alt="logo" />
      <Title>Cursos de Educação Financeira</Title>
    </Container>
  )
}