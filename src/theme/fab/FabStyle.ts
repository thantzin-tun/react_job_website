import styled from "styled-components";

export const FabScrollButton = styled.div`

    border-radius: 20px;
    width:40px;
    height:40px;
    color: #7f7f7f;
    border: 1px solid #7f7f7f;
    background-color: #ededed;
    ${({theme}) => theme.General.flexCenter};
    font-size: 15px;
    cursor: pointer;
    padding-bottom: 6px;
    position: fixed;
    right: 20px;
    bottom:20px;
    overflow: hidden;
    z-index: 200;

    @media(max-width:767px) {
        font-size:30px;
        padding-bottom: 0px;
    }


`