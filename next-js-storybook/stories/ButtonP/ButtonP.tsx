import React, { useState, ReactNode } from "react";
import { ButtonP } from "./ButtonPStyle"

type Props = {
  children?: ReactNode
}

export const Button = ({ children }: Props) => {
  const [isRed, setIsRed] = useState(false);
  return (
    <ButtonP onClick={() => setIsRed(!isRed)}>{children}</ButtonP>
  )
}
