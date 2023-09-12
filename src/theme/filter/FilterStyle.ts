import styled, { css } from "styled-components";

type FilterStyleProps = {
    mobile?: boolean
}

export const FilterStyle = styled.div<FilterStyleProps>`

${({ mobile }) =>
    mobile &&
    css`
        width: 100%;
    `}

  ${({ mobile }) =>
    !mobile &&
    css`
    width: 100%;
    border-radius: 8px;
    box-shadow: 0px 4px 7px 0px rgb(0, 0, 0, 0.14);
    border: 1px solid #dfdfdf;
    padding: 10px 15px;
    `}

  @media(min-width:1025px) {
      position:absolute;
      top:0;
      left:0;
  }

`

//Desktop Filter
export const FilterHeader = styled.div<FilterStyleProps>`

    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dfdfdf;
    padding:8px;

    .clear {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }
`

//Mobile Filter
export const MobileFilterHeader = styled.div`
    
    width:100%;

    .close_filterBar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 45%;
    }

`