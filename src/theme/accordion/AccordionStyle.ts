import styled, { css } from "styled-components";

type AccordionProps = {
    bgColor?: any,
    border?: number
    borderRadius?: string | number,
    borderColor?: any,
    borderBottom?: number | string,
    paddingInline?: number | string,
    active?: any ,
    maxHeight?: number,
    paddingBlock?: string  | number,
    padding?: string | number
}

export const Accordion = styled.div`
  width: 100%;

`

export const AccorItem = styled.div<AccordionProps>`
    width: 100%;
    background-color: ${props => props.theme.color[props.bgColor] || props.bgColor || "transparent"};
`

export const AccorHeader= styled(AccorItem)`

    border: ${props => props.border || 0}px solid ${props => props.theme.color[props.borderColor] || props.borderColor || props.theme.color.gray};

    border-bottom: ${props => props.borderBottom || 1}px solid ${props => props.theme.color[props.borderColor] || props.borderColor || props.theme.color.gray};
    
    padding-inline: ${props => props.paddingInline || 0}px;
    padding-block: ${props => props.paddingBlock || 0}px;
    

`

export const AccorBody= styled(AccorItem)`

    border: ${props => props.border || 0}px solid ${props => props.theme.color[props.borderColor] || props.borderColor || props.theme.color.gray};

    padding: ${props => props.padding || 0}px;

    padding-inline: ${props => props.paddingInline || 0}px;
    padding-block: ${props => props.paddingBlock || 0}px;

    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s linear;

    ${({active}) => active === "show" && css`
         max-height: 150px;
    `}

    /* .footer-list {
        .hover::after {
          content: "";
          position: absolute;
          width: 0%;
          left: 50%;
          bottom: 2px;
          background-color: #777;
          height: 1px;
          transition: all 0.3s linear;
          &:hover {
            &.hover::after {
              width: 100%;
              left: 0;
            }
          }
        }
    } */


`