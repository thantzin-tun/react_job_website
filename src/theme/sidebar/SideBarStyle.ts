import styled, { css } from "styled-components";

type SideBarStyleProps = {
  hide?: boolean;
};

export const SideContainer = styled.div<SideBarStyleProps>`
  width: 100%;
  height: 100vh;
  background-color: rgba(64,64,64,0.9);
  z-index: 50;
  position: fixed;
  left: 0;
  top: 0;
  transition:all 0.2s linear;

  ${({ hide }) =>
    hide &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  ${({ hide }) =>
    !hide &&
    css`
      opacity: 0;
      visibility: hidden;
    `}

    @media(min-width:1025px) {
      display:none;
    }
`;

export const SideBarStyle = styled.div<SideBarStyleProps>`
  width: 350px;
  height: 100vh;
  background-color: rgb(250, 250, 250, 250);
  overflow-y: scroll;
  z-index: 31;
  padding: 15px 0px;
  transition:all 0.2s linear;

  ${({ hide }) =>
    hide &&
    css`
      transform: translateX(0);
    `}

  ${({ hide }) =>
    !hide &&
    css`
      transform: translateX(-100%);
    `}

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      padding: 10px 15px;
      width: 100%;
      transition: background-color 0.2 linear;
      display: flex;
      align-items: center;
      &:hover {
        background-color: #efefef;
        color: #0056b3;
      }
    }
  }
  @media(min-width:1025px) {
      display:none;
    }
`;

export const User = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
