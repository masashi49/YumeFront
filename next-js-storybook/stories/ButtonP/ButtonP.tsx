import { ReactNode } from 'react';
import styled from "styled-components";
import { ButtonP } from "./ButtonPStyle"

type Props = {
  children?: ReactNode
}

export const Button = ({ children }: Props) => {
  return (
    <ButtonP>{children}</ButtonP>
  )
}
