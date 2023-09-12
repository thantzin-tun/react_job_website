import React from 'react'
import { ButtonStyle } from 'theme'

type ButtonProps = {
  children: React.ReactNode,
  bgColor?: string,
  btnPaddingInline?: string | number,
  btnPaddingBlock?: string | number,
  btnTextColor?: string,
  border_radius?: string | number,
  size?: string | number,
  weight?: string | number,
  show?: boolean,
  onClick?:() => void,
  btnWidth?: number | string,
  removeLeftBorder?: boolean,
  removeRightBorder?: boolean,
  marginTop?: number | string,
  marginLeft?: number | string,
  marginBottom?: number | string,
  marginRight?: number | string,
  borderColor?: string,
  borderWidth?: number | string,
  isBorder: boolean
}

export const ButtonCom:React.FC<ButtonProps> = ({children,...props}) => {
    return(
        <>
          <ButtonStyle {...props}>
                {children}
          </ButtonStyle>
        </>
    )
}