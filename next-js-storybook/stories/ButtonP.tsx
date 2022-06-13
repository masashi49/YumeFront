import { ReactNode } from 'react';
import styled from "styled-components";

type Props = {
  children?: ReactNode
}

export const ButtonP = ({ children }: Props) => {

  const Button = styled.button`
 background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
  const Container = styled.div`
  text-align: center;
`

  return (
    <Container>
      <Button>{children}</Button>
    </Container>
  )
}
