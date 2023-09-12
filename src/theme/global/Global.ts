import { createGlobalStyle, css } from "styled-components";

const FindBtn = css`
  background-color: #1ac880;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
`;

const Accordion = css`
  .accordion-item {
    border: none;
    margin-bottom: 1.8rem;
    .accordion-header {
      .accordion-button {
        border-bottom: 1px solid #aeaeae;
        border-radius: 0px;
        padding: 0px;
        &:not(.collapsed),
        &.collapsed {
          background-color: transparent;
          box-shadow: none;
          color: black;
          outline: none;
        }

        &:not(.collapsed)::after {
          transform: rotateX(180deg);
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
        }
        &::after {
          background-size: 0.8rem;
          background-position: center;
          transition: all 0.4s linear;
        }
      }
    }

    .accordion-body {
      padding: 3px 0px;
      .form-select,
      .form-control,
      .check {
        background-image: none;
        font-size: 12px;
        font-weight: 600;
        color: #495057;
        &:focus {
          box-shadow: none;
          border: 1px solid #ced4da;
          outline: none;
        }
        @media (max-width: 1023px) {
          width: 25%;
        }
        @media (max-width: 992px) {
          width: 50%;
        }
      }
    }
  }
`;

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* transition: all 0.3s linear; */
}

body {
    text-decoration: none;
    list-style-type: none;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

.link {
  text-decoration: none;
  color: inherit;
  &:hover {
      color: inherit;
  }
}

.customPadding {
    padding-inline:95px;

    @media(max-width:1273px) {
        padding-inline: 50px;
    }

    @media(max-width:1200px) {
        padding-inline: 20px;
    }

    @media(max-width:768px) {
        padding-inline: 10px;
    }

    //FilteringCom class from Contact.txs to hide FilterComponents 
    .filteringCom {
        @media(max-width:1023px) {
                display: none;
        }
    }
}

.dot {
          width: 5px;
          height: 5px;
          background-color:#9458d1;
          display: none;
          border-radius: 50%;
          margin-right: 10px;
        }

        .findJobBtn {
            display: flex;
            margin-top: 5px;
               
                  .find_button {
                  ${FindBtn};
                  padding: 10px 40px;
                  border-top-right-radius: 0px;
                  border-bottom-right-radius: 0px;
              }
          
              .find_list {
                  ${FindBtn};
                  padding: 10px;
                  border-top-left-radius: 0px;
                  border-bottom-left-radius: 0px;
                  width: 60px;
              }

              .list {
                    width: 2px;
                    background-color:#fff;
                    height:100%;
              }

        }

        .one {
            ${Accordion};
        }

        .two {
            ${Accordion};
            .accordion-item {
              margin-bottom: 0px;
              border-bottom: 1px solid #eaeaea;
              .accordion-header {
                .accordion-button {
                    padding:10px 0px;
                    border-bottom: none;
                    font-size:13px;
                    color:#222;
                    font-weight: 600;
                    &:not(.collapsed)::after {
            transform: rotate(0);
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
          }
          &::after {
            background-size: 0.8rem;
            background-position: center;
            transition: all 0.4s linear;
            transform: rotate(-90deg);
            font-weight:bold;
          }
                }
              }
              .accordion-body {
                  padding: 0px 0px 10px 0px;
              }

            }
        }
        
        

    

`;
