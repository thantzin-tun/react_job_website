import React, { FC } from "react";
import { TextStyle } from "theme";

type TextProps = {
    children?: React.ReactNode;
    color?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    fontStyle?: string;
    align?: string;
    decoration?: string;
    marginTop?: number | string,
    marginBottom?: number | string,
    marginLeft?: number | string,
    marginRight?: number | string,
    hoverColor?: string,
    className?:any,
    hide?: boolean,
    show?: boolean,
    style?: any,
    onClick?: () => any
}

export const TextCom: FC<TextProps> = ({children,...props}) => {
    return (
        <TextStyle {...props}>
            {children}
        </TextStyle>
    )
}