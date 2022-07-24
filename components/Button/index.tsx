import React, {ButtonHTMLAttributes} from "react";
import * as S from './styles'

export type ButtonProps = {
    children: React.ReactNode,
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, ...props}:ButtonProps) =>(
  <S.Button {...props}>
      {children}
  </S.Button>
)


export default Button;
