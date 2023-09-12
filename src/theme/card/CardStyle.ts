import styled from "styled-components";
type CardStyleProps = {
  marginBottom?: number
};

export const CardContainer = styled.div<CardStyleProps>`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 7px 0px rgb(0, 0, 0, 0.14);
  border: 1px solid #dfdfdf;
  padding: 7px 20px;
  position: relative;
  transition: all 0.2s linear;

  margin-bottom:${props => props.marginBottom}px;

  &:hover {
    box-shadow: none;
    transform: translateY(-3px);
  }

  .info {
    .card-header {
    }
    .company_logo {
      margin-right: 10px;
      img {
        @media (max-width: 768px) {
          width: 60px;
          height: 60px;
        }
      }
    }
  }

  .job_info {
        display: flex;
        flex-direction: column;
        transform: translateY(-18px);
        margin-left: 30px;
        @media(max-width:768px) {
            margin-left: 30px;
        transform: translateY(-4px);

        }
        .dots {
          width: 5px;
          height: 5px;
          background-color:#445ee9;
          border-radius: 50%;
          margin-right: 10px;
          display: inline-block;
        }
      }

      .line {
        width: 100%;
        height: 1px;
        background-color: #aeaeae;
        margin-block: 8px;
        opacity: 0.4;
      }
`;

export const CardFooter = styled.div<CardStyleProps>`
  width: 100%;
  ${({ theme }) => theme.General.flexBetween};

  .recruiter,
  .function,
  .date {
    display: flex;
    align-items: center;
  }

  .verify {
    display: none;
  }

  @media (max-width: 1024px) {
    .function,
    .recruiter {
      display: none;
    }
    .verify {
      display: block;
    }
  }
`;
