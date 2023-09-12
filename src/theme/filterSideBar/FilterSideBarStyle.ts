import styled, { css } from "styled-components";

type FilterSideBarStylePros = {
  active?: boolean,
  hide?: boolean
}

export const FilterSideBarStyle  = styled.div<FilterSideBarStylePros>`

    width: 100vw;
    min-height: 100vh;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    overflow-y: scroll;
    /* background-color: ${({theme}) => theme.color.cardBack}; */
    background-color: #fff;
    padding: 15px 25px 15px 10px;
    transition:all 0.2s linear;

    ${({ active }) =>
    active &&
    css`
      transform: translateX(0px);
    `}

  ${({ active }) =>
    !active &&
    css`
    transform: translateX(-100%);
    `}

    @media(min-width:1025px) {
      display:none;
    }


`

export const SortingBar = styled(FilterSideBarStyle)`
      padding: 15px 0px;
      ${({ hide }) =>
    hide &&
    css`
      transform: translateX(0px);
    `}

  ${({ hide }) =>
    !hide &&
    css`
    transform: translateX(100%);
    `}

    .sortOne {
        padding:15px 40px;
        display:flex;
        align-items:center;
    }

`