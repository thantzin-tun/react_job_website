import styled from "styled-components";

type HeaderProps = {};

export const HeaderStyle = styled.div<HeaderProps>`
  padding-inline: 30px;
  ${({ theme }) => theme.General.flexBetween};
  background-color: #fefefe;
  box-shadow: 0 3px 5px 1px rgb(0 0 0 / 24%);
  font-size: ${({ theme }) => theme.fontSize.customSize};
  height: 50px;
  user-select: none;
  position: relative;
  z-index: 100;

  @media (max-width: 1280px) {
    /* padding-inline: 10px; */
    padding-inline: 0px;
  }

`;

export const MobileHeader = styled.div<HeaderProps>`
  ${({ theme }) => theme.General.flexBetween};

  width: 100%;
  height: 50px;
  background-color: #fefefe;
  box-shadow: 0 3px 5px 1px rgb(0 0 0 / 24%);
  padding-inline:20px;

  .left_logo {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      height: 33px;
      width: 33px;
      border-radius: 50%;
      border: 1px solid #639;
    }

    .hambuger {
      position: absolute;
      right: -2px;
      bottom: -2px;
      width: 15px;
      height: 15px;
      padding: 3px 2px 2px;
      box-shadow: 0 0 1px 1px #639;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        display: block;
        width: 100%;
        height: 1px;
        background-color: #663399;
        margin-bottom: 2px;

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
  .jobNetLogo {
    width: 32px;
    height: 32px;
  }

  .searchBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    border: 1px solid #aeaeae;
    padding: 5px 10px;
    border-radius: 4px;
    margin-inline: 10px;

    input {
      width: 100%;
      font-size: 13px;
      background-color: transparent;
      border: none;
      font-weight: 600;
      &:focus {
        outline: none;
      }
    }
  }

  @media (min-width: 1280px) {
    display: none;
  }

  @media (max-width: 1024px) {
    position: fixed;
    padding-inline: 10px;
    top: 0;
    left: 0;
  }
`;

export const Right = styled.div<HeaderProps>`
  img {
    width: 190px;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const Left = styled.div`
  ${({ theme }) => theme.General.flexCenter};
  ul {
    ${({ theme }) => theme.General.flexCenter};
    height: 100%;
    list-style-type: none;
    display: flex;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  .myanmar {
    border-inline: 2px solid #f8f8f8;
    padding-inline: 20px;
    padding-block: 10px;
    margin-inline: 13px;
    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
  }

  @media (max-width: 1279px) {
    display: none;
  }
`;
