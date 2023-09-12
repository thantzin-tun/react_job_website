import { ButtonCom, TextCom } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.scss"
import { useMediaQuery } from 'react-responsive'
import { logo } from 'assets'

type FooterProps = {

}

const footArray = [
    {
        title: "EMPLOYEERS",
        link: ['Free Employeer Account', 'Advertise with Us']
    },
    {
        title: "JOB SEEKERS",
        link: ['Free Job Seeker Account', 'Upload CV', 'Browse Jobs']
    },
]

const accor = [
    {
        title: "JOBNET",
        items: [
            {
                name: "About Us",
                link: "/about"
            },
            {
                name: "News",
                link: "/news"
            },
            {
                name: "Carrers@JobNet",
                link: "/carrrers"
            },
        ]
    },
    {
        title: "EMPLOYEERS",
        items: [
            {
                name: "Free Employeer Account",
                link: "/account"
            },
            {
                name: "Advertise with Us",
                link: "/advertise"
            },
        ]
    },
    {
        title: "JOB SEEKERS",
        items: [
            {
                name: "Free Job Seeker Account",
                link: "/freejob"
            },
            {
                name: "Upload CV",
                link: "/upload"
            },
            {
                name: "Browse Jobs",
                link: "/browseJobs"
            },
        ]
    },
    {
        title: "PARTNERS",
        items: [
            {
                name: "Myanmar Employer Awards",
                link: "/awards"
            },
            {
                name: "Best Companies in Myanmar",
                link: "/best"
            },
            {
                name: "Best Companies in Myanmar (Winners)",
                link: "/company"
            },
            {
                name: "Myanmar Real Estate & Property",
                link: "/real-estate"
            },
            {
                name: "Alote for Blue Collar Workers",
                link: "/alote"
            },
        ]
    },
]

export const FooterCom: React.FC<FooterProps> = () => {

    const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <>
            <div className="container-fluid p-0 mt-4">

                <div className="row customPadding mb-3 mobileFooter m-0">

                    <div className="col-sm-12 col-md-5 left m-0">
                        <img src={logo} alt="logo" width="190px" />
                    </div>

                    <div className="right col m-0">
                        <TextCom fontSize="sm" fontWeight="700" color='#3b3b3b'>Browse By</TextCom>
                        <ButtonCom border_radius={5} btnWidth="148px" btnPaddingBlock="7" size="14" borderColor='#dfdfdf' isBorder={true} borderWidth={1} marginLeft={8} marginRight={8}>
                            <TextCom hoverColor='#9458d1' fontWeight="600">Jobs</TextCom>
                        </ButtonCom>
                        <ButtonCom border_radius={5} btnWidth="148px" btnPaddingBlock="7" size="14" borderColor='#dfdfdf' isBorder={true} borderWidth={1}>
                            <TextCom hoverColor='#9458d1' fontWeight="600">Location</TextCom>
                        </ButtonCom>
                    </div>
                </div>

                {
                    isTabletOrMobile
                        ?
                        <div className="customPadding primaryfooter">
                            <div className="row d-flex justify-content-center gap-0">
                                <div className="col-9">
                                    <div className="accordion one" id="accordionPanelsStayOpenExampleOne">
                                        {
                                            accor.map((data: { title: string, items: any }, index: number) => {
                                                return (
                                                    <div className="accordion-item" key={index}>
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapseOne${index}`}>
                                                                <TextCom fontSize="md" fontWeight="xl">
                                                                    {data.title}
                                                                </TextCom>
                                                            </button>
                                                        </h2>
                                                        <div id={`panelsStayOpen-collapseOne${index}`} className="accordion-collapse collapse">
                                                            <div className="accordion-body">
                                                                <div className="link d-flex flex-column mt-1">
                                                                    {
                                                                        data.items.length > 0 &&
                                                                        data.items.map((data: { name: string, link: string }, index: number) => {
                                                                            return (
                                                                                <TextCom fontSize="13" marginBottom="6" key={index}>
                                                                                    <Link to={data.link} className="link hover">
                                                                                        {data.name}
                                                                                    </Link>
                                                                                </TextCom>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="col-9 d-flex justify-content-center flex-column align-items-center">
                                    <TextCom marginBottom="20" fontSize="md" fontWeight="600">Browse By</TextCom>
                                    <div className="d-flex">
                                        <ButtonCom marginRight="60" border_radius="5"
                                            isBorder={false}
                                            btnPaddingInline="30" btnPaddingBlock="10">
                                            <TextCom fontSize="14" hoverColor='#9458d1' fontWeight="600">Jobs</TextCom>
                                        </ButtonCom>
                                        <ButtonCom border_radius="5"
                                            isBorder={false}
                                            btnPaddingInline="30" btnPaddingBlock="10">
                                            <TextCom fontSize="14" hoverColor='#9458d1' fontWeight="600">Location</TextCom>
                                        </ButtonCom>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :

                        <div className="customPadding primaryfooter">
                            <div className="row d-flex">

                                <div className="col-lg-3 col-md-2">
                                    <TextCom fontSize="md" fontWeight="600">JOBNET</TextCom>
                                    <div className="link">
                                        <TextCom color='#777' fontSize="12" fontWeight="600">
                                            <Link to="/about" className='link mt-2 hover'>About Us</Link>
                                        </TextCom>
                                    </div>
                                    <div className="link">
                                        <TextCom color='#777' fontSize="12" fontWeight="600">
                                            <Link to="/news" className='link mt-2 hover'>News</Link>
                                        </TextCom>
                                    </div>
                                    <div className="link">
                                        <TextCom color='#777' fontSize="12" fontWeight="600">
                                            <Link to="/carrers" className='link mt-2 hover'>Carrers@JobNet</Link>
                                        </TextCom>
                                    </div>
                                </div>

                                {
                                    footArray.map((data: { title: string, link: string[] }, index: number) => {
                                        return (
                                            <div className="col-3" key={index}>
                                                <TextCom fontSize="md" fontWeight="600">{data.title}</TextCom>
                                                <div className="link">
                                                    {
                                                        data?.link?.map((sub: string, index: number) => {
                                                            return (
                                                                <TextCom color='#777' key={index} fontSize="12" fontWeight="600">
                                                                    <Link to="/" className='link mt-2 hover'>{sub}</Link>
                                                                </TextCom>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="col-4 col-lg-3 ps-0">
                                    <TextCom fontSize="md" fontWeight="xl">PARTNERS</TextCom>
                                    <div className="link">
                                        <TextCom color='#777' fontSize="12" fontWeight="600">
                                            <Link to="/" className='link mt-2 hover'>Myanmar Employer Awards</Link>
                                        </TextCom>
                                        <TextCom color='#777' fontSize="12" fontWeight="600">
                                            <Link to="/" className='link mt-2 hover'>Best Companies in Myanmar</Link>
                                        </TextCom>
                                        <TextCom color='#777' fontSize="12" fontWeight="600">
                                            <Link to="/" className='link mt-2 hover'>Best Companies in Myanmar (Winners)</Link>
                                        </TextCom>
                                        <TextCom color='#777' fontSize="12" fontWeight="600">
                                            <Link to="/" className='link mt-2 hover'>Myanmar Real Estate & Property</Link>
                                        </TextCom>
                                        <TextCom color='#777' fontSize="12" fontWeight="600">
                                            <Link to="/" className='link mt-2 hover'>Alote for Blue Collar Workers</Link>
                                        </TextCom>
                                    </div>
                                </div>

                            </div>
                        </div>
                }

                <div className="customPadding secondaryfooter">

                    <div className='copy_write'>
                        <TextCom fontSize="13" fontWeight="600" color='#777' marginBottom="5">
                            Copyright @ 2023 JobNet.com.mm
                        </TextCom>
                    </div>

                    <div className='privacy'>

                        <TextCom fontSize="12" fontWeight="600" color='#777' marginBottom="5">
                            <Link className='link' to="/privacy">Privacy</Link>
                        </TextCom>

                        <div className="divider"></div>

                        <TextCom fontSize="customSize" fontWeight="600" color='#777'>
                            <Link className='link' to="./term">
                                Terms & Conditions
                            </Link>
                        </TextCom>

                        <div className="divider"></div>

                        <TextCom fontSize="customSize" fontWeight="600" color='#777'>
                            <Link className='link' to="./about us">About Us</Link>
                        </TextCom>

                    </div>


                    <div className='social'>
                        <TextCom fontSize="customSize" fontWeight="600" color='#777' className="d-flex ">
                            <i className="fa-brands fa-facebook-f fs-5 me-3"></i>
                            <i className="fa-brands fa-linkedin-in fs-5"></i>
                        </TextCom>
                    </div>
                </div>

            </div>
        </>
    )
}