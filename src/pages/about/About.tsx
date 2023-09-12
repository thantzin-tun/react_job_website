import { ButtonCom, TextCom } from 'components'
import React from 'react'
import { JobDetailContainer, JobDetailBanner } from './AboutPageStyle'

import { Link } from 'react-router-dom'

import { kbz, companybanner } from 'assets'

type AboutProps = {

}

export const About: React.FC<AboutProps> = () => {
  return (
    <>
      <div className="container-fluid p-0">

        <JobDetailBanner banner={companybanner}>

          <div className="job-detail-banner-info">
            <div className="company-info">
              <div className="job_detail_company_logo">
                <img src={kbz} alt='company-logo' />
              </div>

              <div className="job_detail_company_info">
                <TextCom marginBottom="1px" fontSize="14" fontStyle='700' color='black'>
                  <Link to="/company-profile" className="link">
                    KBZ Bank
                  </Link>
                </TextCom>
                <TextCom marginBottom="1px" fontSize="xs" color='#5f5d5d'>1
                  <Link to="/company-profile">
                    0001-20000 | Yangon
                  </Link>
                </TextCom>
                <TextCom fontSize="xs" color='blue'>
                </TextCom>
              </div>

            </div>
          </div>

        </JobDetailBanner>

        <JobDetailContainer>
          <div className="row">
            <div className="col-lg-9 col">

              <div className="job_info_card">

                <div className="job_detail_company_logo">
                  <img src={kbz} alt='company-logo' />
                </div>

                <div className="job_detail_description">
                  <div className="job_title">
                    <TextCom>
                      Assistant Product Manager
                    </TextCom>
                    <TextCom>
                      <Link className='link' to="/company-profile">
                        KBZ Bank
                      </Link>
                    </TextCom>
                    <div className="three">
                      <TextCom>

                        Myanmar - Yangon
                      </TextCom>
                      <TextCom>

                        Full Time
                      </TextCom>
                      <TextCom>

                        Verified
                      </TextCom>
                    </div>
                  </div>
                  <div className="job_time">
                    <div className="job_detail_company_logo">
                      <img src={kbz} alt='company-logo' />
                    </div>
                    <TextCom>
                      Negotiable
                    </TextCom>
                    <TextCom>
                      Recruiter active 2 hours ago
                    </TextCom>
                    <div className="">
                      <TextCom>
                        Today
                      </TextCom>
                    </div>
                  </div>
                </div>

                <div className='apply_button w-100'>
                  <ButtonCom btnWidth="100%" isBorder={false} bgColor="#639" btnTextColor='#fff' weight="600"
                  borderWidth="1" border_radius="5"
                  >
                     Apply Now
                  </ButtonCom>
                </div>

              </div>

            </div>

            <div className="col-lg-3 col">
            </div>

          </div>
        </JobDetailContainer>

      </div>
    </>
  )
}
