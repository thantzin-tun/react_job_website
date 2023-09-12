import styled from "styled-components";

type SelectStyleProps = {
  bgColor?: string;
  dot?: any;
};

export const MainSelect = styled.div<SelectStyleProps>`
  position: relative;
  width: 100%;
  background-color: ${(props) =>
    props.theme.color[props.bgColor || ""] || props.bgColor || "transparent"};
`;

export const Select = styled.div<SelectStyleProps>`
  background-color: ${(props) =>
    props.theme.color[props.bgColor || ""] || props.bgColor || "transparent"};
    padding: 5px;
`;

export const OptionBox = styled.div<SelectStyleProps>`
  position: absolute;
  top:100%;
  left: 0;
  width: 100%;
  background-color: ${(props) =>
  props.theme.color[props.bgColor || ""] || props.bgColor || "transparent"};
  height: 200px;
  overflow-y: scroll;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 60%;

    li {
      margin: 7px 0px;
      transition: all 0.2s linear;
      ${({theme}) => theme.General.flexStart}
      font-size: 14px;
      font-weight: 600;
      color:rgb(33,37,41);
      .dot {
        width: 5px;
        height: 5px;
        background-color: purple;
        border-radius: 50%;
        margin-right: 7px;
        display: none;
      }
      &:hover {
        transform: translateX(10px);
        color: #9458d1;
        .dot {
            display: block;
        }
      }
    }
  }
`;

export const Option = styled.div<SelectStyleProps>`
  height: fit-content;
  background-color: ${(props) =>
    props.theme.color[props.bgColor || ""] || props.bgColor || "transparent"};
  padding: 5px;
  transition: all 0.2s linear;
  width: 50%;
  margin: 5px 0px;

  &:hover {
    transform: translateX(10px);
  }
`;
