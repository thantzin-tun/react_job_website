import styled, { css } from "styled-components";

type JobDetailProps = {
  banner?: any;
};

const breakpoints = css`
  max-width: 1180px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;
`;

//No Banner under Two Column
export const JobDetailContainer = styled.div<JobDetailProps>`
  ${breakpoints};

  .job_info_card {
    margin-bottom: 20px;
    padding: 15px 20px 15px 34px;
    border-radius: 5px;
    border: 1px solid #dfdfdf;
    background-color: #fff;
    ${({ theme }) => theme.General.flexCenter};
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 40%);

    //Left Logo
    .job_detail_company_logo {
      width: 85px;
      height: 85px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media(max-width:1023px) {
        display: none;
      }
    }

    //Right Info
    .job_detail_description {
      ${({ theme }) => theme.General.flexCenter};
      .job_title {
        display: flex;
        flex-direction: column;

        .three {
          display: flex;
        }
      }

      .job_time {
        width: 100%;
        .job_detail_company_logo {
          display: none;
          @media (max-width: 1023px) {
            display: flex;
            justify-content: flex-end;
          }
        }
      }
    }

    //Button min width 1024
    .apply_button {
        display: none;
        @media(min-width:1024px) {
            display: block;
        }
    }
  }
`;

//Detail Banner top
export const JobDetailBanner = styled.div<JobDetailProps>`
  width: 100%;
  height: 180px;
  padding: 10px;

  /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */

  background: url(${(props) => props.banner}) no-repeat top;
  background-size: cover;

  .job-detail-banner-info {
    ${breakpoints};
    height: 100%;
    display: flex;
    align-items: flex-end;

    .company-info {
      padding: 10px;
      ${({ theme }) => theme.General.flexBetween};
      background-color: rgba(255, 255, 255, 0.83);

      .job_detail_company_logo {
        width: 60px;
        height: 60px;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .job_detail_company_info {
        display: flex;
        flex-direction: column;
      }
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
