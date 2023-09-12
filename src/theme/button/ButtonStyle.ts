import styled, { css } from "styled-components";

const buttonRipple = css`
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity:1;
  transition: transform 0.5s ease-in-out;
  background:rgba(26,232,128,0.5);
`;

type ButtonStyleProps = {
  bgColor?: string;
  btnPadding?: number;
  btnTextColor?: string;
  border_radius?: string | number;
  btnPaddingInline?: string | number;
  btnPaddingBlock?: string | number;
  size?: string | number;
  weight?: string | number;
  show?: boolean;
  btnWidth?: number | string;
  removeLeftBorder?: boolean;
  removeRightBorder?: boolean;
  marginTop?: number | string;
  marginLeft?: number | string;
  marginBottom?: number | string;
  marginRight?: number | string;
  className?: React.CSSProperties;
  borderColor?: string;
  borderWidth?: number | string;
  isBorder: boolean;
};

export const ButtonStyle = styled.button<ButtonStyleProps>`
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    ${buttonRipple};
    transform: translateX(-100%);
  }

  &::after {
    ${buttonRipple};
    transform: translateX(100%);
  }

  &:hover {
    &::before {
      transform: translateX(-50%);
    }
    &::after {
      transform: translateX(50%);
    }
  }

  ${({ theme }) => theme.General.flexCenter};

  width: ${(props) => props.btnWidth};

  ${({ isBorder }) =>
    isBorder &&
    css<ButtonStyleProps>`
      border: ${(props) => props.borderWidth}px solid
        ${(props) => props.borderColor};
    `}

  ${({ isBorder }) =>
    !isBorder &&
    css<ButtonStyleProps>`
      border: none;
    `}

  /* border: ${(props) => props.borderWidth}px solid ${(props) =>
    props.borderColor}; */

  background-color: ${(props) =>
    props.theme.color[props.bgColor || ""] ||
    props.bgColor ||
    props.theme.color.cardBack};
  height: 100%;
  padding-inline: ${(props) => props.btnPaddingInline || 5}px;
  padding-block: ${(props) => props.btnPaddingBlock || 5}px;

  font-size: ${(props) =>
    props.theme.fontSize[props.size || ""] ||
    props.size ||
    props.theme.fontSize.lg}px;

  color: ${(props) =>
    props.theme.color[props.btnTextColor || ""] ||
    props.btnTextColor ||
    props.theme.color.black};

  font-weight: ${(props) =>
    props.theme.fontWeight[props.weight || ""] ||
    props.weight ||
    props.theme.fontWeight.lg};

  border-radius: ${(props) =>
    props.theme.borderRadius[props.border_radius || ""] ||
    props.border_radius ||
    props.theme.borderRadius.sm}px;

  margin-top: ${(props) =>
    props.theme.margin[props.marginTop || ""] || props.marginTop}px;
  margin-bottom: ${(props) =>
    props.theme.margin[props.marginBottom || ""] || props.marginBottom}px;
  margin-left: ${(props) =>
    props.theme.margin[props.marginLeft || ""] || props.marginLeft}px;
  margin-right: ${(props) =>
    props.theme.margin[props.marginRight || ""] || props.marginRight}px;

  /* border: none; */
  outline: none;
  cursor: pointer;

  /* box-shadow: 0px 4px 7px 0px rgb(0, 0, 0, 0.14); */

  ${({ removeLeftBorder }) =>
    removeLeftBorder &&
    css`
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    `}

  ${({ removeRightBorder }) =>
    removeRightBorder &&
    css`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `}

  @media(min-width:992px) {
    ${({ show }) =>
      show &&
      css`
        display: none;
      `}
  }
`;
