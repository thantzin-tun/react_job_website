import { TextCom } from "components/text";
import React from "react";
import { CardContainer, CardFooter } from "theme";
import { security, kbsm } from "assets";
import { ButtonCom } from "components/button";
import { Link } from "react-router-dom";

type CardProps = {
  marginBottom?: number;
  // data: {
  //     id: number,
  //     title: string,
  //     logo:string,
  //     company_name: string,
  //     salary: string | number,
  //     location: string,
  //     description: string,
  //     job_function: string
  // }
  data: any;
};

export const Card: React.FC<CardProps> = ({ marginBottom, data }) => {
  const {
    title,
    logo,
    company_name,
    salary,
    location,
    description,
    job_function,
  } = data;

  return (
    <>
      <CardContainer marginBottom={marginBottom}>
        <div className="info d-flex justify-content-between align-items-start">
          <div className="card-header d-flex flex-column justify-content-start ">
            <TextCom fontSize="xxxl" fontWeight="600" color="title">
              <Link to="/job-detail" className="link">
                {title}
              </Link>
            </TextCom>
            <TextCom color="#777" fontSize="lg" fontWeight="600">
              {company_name}
            </TextCom>

            <div className="location-salary mb-2">
              <TextCom
                hoverColor="salaryHover"
                color="salary"
                fontWeight="600"
                marginRight="30"
                fontSize="sm"
              >
                <i className="fa-solid fa-dollar-sign me-1"></i>
                {salary}
              </TextCom>
              <TextCom
                marginRight="30"
                fontSize="sm"
                fontWeight="600"
                color="#777"
              >
                <i className="fa-solid fa-location-arrow text-warning me-1"></i>
                {location}
              </TextCom>
              <TextCom fontSize="sm" fontWeight="600" hide={true}>
                <img src={security} alt="security" className="me-1" />
                Verified
              </TextCom>
            </div>
          </div>

          <div className="company_logo">
            <img src={logo} className="img-fluid" alt="company-logo" />
          </div>
        </div>

        <div className="job_info">
          <TextCom fontWeight="600" fontSize="sm" color="#222">
            <div className="dots"></div>
            Benefits: Overtime payments * Rewards for over performance...
          </TextCom>

          <TextCom fontWeight="600" marginTop="3" fontSize="sm">
            <div className="dots"></div>
            Highlights: Fun working environment * International standards * Make
            a difference * Join and experienced ....
          </TextCom>

          <TextCom fontWeight="600" marginTop="3" fontSize="sm">
            <div className="dots"></div>
            Career Opportunities: Training provided * Learn new skills on the
            job * Promotion opportunities * Management potential ....
          </TextCom>
        </div>

        <TextCom fontSize="sm" marginTop="5" fontWeight="600" color="#777">
          {description.substring(0)}...
        </TextCom>

        <div className="line" />

        <CardFooter>
          <div className="function">
            <i className="fa-regular fa-folder-closed me-2"></i>
            <TextCom fontSize="sm" fontWeight="600">
              Job Function:{" "}
            </TextCom>
            <TextCom
              fontSize="sm"
              fontWeight="600"
              color="#3B3B3B"
              marginLeft="5"
            >
              {job_function}
            </TextCom>
          </div>

          <div className="recruiter">
            <i className="fa-regular fa-eye me-2"></i>
            <TextCom fontSize="sm" fontWeight="600" color="#3B3B3B">
              Recruiter active 21 hours ago
            </TextCom>
          </div>

          <div className="date">
            <i className="fa-regular fa-calendar-check me-2"></i>
            <TextCom fontSize="sm" fontWeight="600" color="#3B3B3B">
              03 Feb 2023
            </TextCom>
          </div>

          <div className="verify">
            <TextCom fontSize="sm" fontWeight="600">
              <img src={security} alt="security" className="me-1" />
              Verified
            </TextCom>
          </div>

          <ButtonCom
            isBorder={false}
            bgColor="#663399"
            btnPaddingInline="20"
            btnPaddingBlock="6"
            size="sm"
            btnTextColor="white"
            border_radius="4"
            show={true}
          >
            View
          </ButtonCom>
        </CardFooter>
      </CardContainer>
    </>
  );
};
