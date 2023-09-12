import styled, { css } from "styled-components";

type TextProps = {
  color?: string;
  fontSize?: any;
  fontWeight?: any;
  fontStyle?: any;
  align?: any;
  decoration?: any;
  marginTop?: number | string
  marginBottom?: number | string,
  marginLeft?: number | string
  marginRight?: number | string,
  hoverColor?: string,
  className?: React.CSSProperties,
  hide?: boolean,
  show?: boolean
};

export const TextStyle = styled.span<TextProps>`

  width: fit-content;

  color: ${props => props.theme.color[props.color || ""] || props.color || props.theme.color.dark};

  font-size: ${props => props.theme.fontSize[props.fontSize] || props.fontSize ||  props.theme.fontSize.md}px;

  font-weight: ${props =>props.theme.fontWeight[props.fontWeight] || props.fontWeight || props.theme.fontWeight.sm};

  font-style: ${props => props.theme.fontStyle[props.fontStyle] || props.theme.fontStyle.normal};

  text-align: ${props => props.align};

  text-decoration: ${props => props.decoration};

  margin-top: ${props => props.theme.margin[props.marginTop || ""] || props.marginTop}px;
  margin-bottom: ${props => props.theme.margin[props.marginBottom || ""] || props.marginBottom}px;
  margin-left: ${props => props.theme.margin[props.marginLeft || ""] || props.marginLeft}px;
  margin-right: ${props => props.theme.margin[props.marginRight || ""] || props.marginRight}px;


  transition: all 0.2s linear;

  &:hover {
    color: ${props => props.theme.color[props.hoverColor || ""] || props.hoverColor || props.theme.color.dark};
  }

  @media(max-width:992px) {
        font-size: ${props => props.theme.tabletSize[props.fontSize || ""]}px;
  }


  @media(max-width:768px) {
        font-size: ${props => props.theme.mobileSize[props.fontSize || ""]}px;
        ${({hide}) => hide && css`
        display: none;
  `}
  }

  @media(min-width:768px) {
        ${({show}) => show && css`
        display: none;
  `}

  }

`;
