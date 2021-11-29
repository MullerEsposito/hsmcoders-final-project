import styled from "styled-components";

interface ContainerProps {
  bg?: string;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${props => props?.bg ?? "gray" };
  padding: 5px;
  border: none;
  border-radius: 10%;
  color: white;

  &:hover {
    filter: brightness(140%);
    transition: filter 0.8s;
  }
`