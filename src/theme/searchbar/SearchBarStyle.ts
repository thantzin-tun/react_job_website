import styled, { css } from "styled-components";

const FindButton = css`
  background-color: #1ac880;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  ${({ theme }) => theme.General.flexCenter};
  border: none;
  @media (max-width: 1106px) {
    font-size: 15px;
  }
`;

type SearchBarProps = {
  bgColor?: any;
};

export const SearchBarContainer = styled.div<SearchBarProps>`
  width: 100%;
  background-color: ${(props) =>
    props.theme.color[props.bgColor] ||
    props.bgColor ||
    props.theme.color.backColor};
  padding: 13px 0px;
  z-index: 10;
`;

export const SearchBarStyle = styled.div<SearchBarProps>`
  background-color: ${(props) =>
    props.theme.color[props.bgColor] ||
    props.bgColor ||
    props.theme.color.searchBgColor};
  padding: 0px 6px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    ${({ theme }) => theme.General.flexCenter}
    width: 380px;
    input {
      border: none;
      outline: none;
      box-shadow: none;
      font-size: 14px;
      font-weight: 600;
      padding: 10px 0px;
      width: 100%;
    }
    i {
      margin-right: 15px;
    }
    @media (max-width: 1274px) {
      width: 300px;
    }
  }

  .line {
    background-color: #aeaeae;
    width: 1px;
    height: 40px;
    opacity: 0.4;
  }

  .job-function {
    width: 300px;
    @media (max-width: 1333px) {
      width: 290px;
    }
  }

  .location {
    width: 250px;
    @media (max-width: 1333px) {
      width: 240px;
    }
    @media (max-width: 1080px) {
      width: 230px;
    }
  }

  .job-function,
  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .dropdown {
      .dropdown-toggle {
        padding: 15px 10px;
        margin: 0px;
        background-color: #fff;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 0px;
        &::after {
          display: none;
        }
      }
      .dropdown-menu {
        width: 100%;
        border-radius: 0px;
        height: 300px;
        background-color: ${({ theme }) => theme.color.dropDownColor};
        border-top: 1px solid #aeaeae;
        z-index: 10;
        .myDropDown {
          padding: 5px 20px;
          display: flex;
          flex-direction: column;
          overflow-y: scroll;
          height: 100%;
          .item {
            width: 95%;
            margin-bottom: 6px;
            &:hover {
              .dot {
                display: inline-block;
              }
              .move {
                transform: translateX(5px);
              }
            }
          }
        }
      }
    }
  }

  .findJobButton {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 0px 0px 3px;

    .find-button {
      ${FindButton};
      padding: 10px 40px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      @media (max-width: 1323px) {
        padding: 10px 30px;
      }
      @media (max-width: 1302px) {
        padding: 10px 20px;
      }
    }

    .find-list {
      ${FindButton};
      padding: 10px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      @media (max-width: 1106px) {
        padding: 10px 5px;
      }
    }

    .list {
      width: 2px;
      background-color: #fff;
      height: 100%;
    }
    @media (max-width: 1023px) {
      margin-top: 5px;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
