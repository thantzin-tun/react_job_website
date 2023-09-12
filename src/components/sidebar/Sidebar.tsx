import React from 'react';
import { SideBarStyle, SideContainer ,User} from 'theme';
import { Link } from 'react-router-dom';
import { TextCom } from 'components'
import { FaHome } from 'react-icons/fa'
import { AiFillDashboard, AiOutlineSearch, AiOutlineWifi } from 'react-icons/ai'
import { GiDigitalTrace } from 'react-icons/gi'
import { MdEmail, MdOutlineRecommend } from 'react-icons/md'
import { BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { RiMessage2Fill } from 'react-icons/ri'
import { FiDownload } from 'react-icons/fi'
import { AiFillFileUnknown } from 'react-icons/ai'
import { Si1Password } from 'react-icons/si'
import { myanmar ,user} from 'assets';
import { FiLogOut } from 'react-icons/fi'


type SideBarProps = {
    hide: boolean,
    setHide: any
}

const sideBarMenuList = [
    {
        name: "Home",
        link: "/",
        icon: <FaHome />
    },
    {
        name: "Dashboard",
        link: "/",
        icon: <AiFillDashboard />
    },
    {
        name: "My Digital CV ID",
        link: "/",
        icon: <GiDigitalTrace />
    },
    {
        name: "Job Alerts",
        link: "/",
        icon: <MdEmail />
    },
    {
        name: "Recommended Jobs",
        link: "/",
        icon: <MdOutlineRecommend />
    },
    {
        name: "My Application Status",
        link: "/",
        icon: <BsFillFileEarmarkTextFill />
    },
    {
        name: "Who Viewed Your Profile",
        link: "/",
        icon: <AiOutlineSearch />
    },
    {
        name: "View my current CV",
        link: "/",
        icon: <AiFillFileUnknown />
    },
    {
        name: "Download CV Templates",
        link: "/",
        icon: <FiDownload />
    },
    {
        name: "Message Chat",
        link: "/",
        icon: <RiMessage2Fill />
    },
]

export const SideBarCom:React.FC<SideBarProps> = ({hide,setHide}) => {
    return (
        <>
                <SideContainer hide={hide}>

                    <SideBarStyle hide={hide}>

                        <User>
                            <img src={user} alt="" width="75px" height="75px" style={{borderRadius:"50%",marginRight:"10px"}}/>
                            <div className='d-flex flex-column'>
                                <TextCom fontSize="16" fontWeight="lg">Thant Zin Tun</TextCom>
                                <TextCom color='blue' fontSize="customSize" fontWeight="lg">View My Profile</TextCom>
                            </div>
                            <i className="fa-solid fa-xmark fs-3 position-absolute" style={{top:"-10px",right:"5px"}}
                            onClick={() => setHide(!hide)}
                            ></i>
                        </User>

                        <ul>
                        <li style={{ borderTop: "1px solid #dcdcdc" }}>
                                <AiOutlineWifi />
                                <Link to="/contact" className="link">
                                    <TextCom
                                        fontWeight="600"
                                        fontSize="14"
                                        marginLeft="15"
                                    >
                                       Information Bar
                                    </TextCom>
                                </Link>
                            </li>
                            {
                                sideBarMenuList.map((data: { name: string, link: string, icon: any }, index: number) => {
                                    return (
                                        <li key={index}>
                                            {data.icon}
                                            <Link to="/contact" className="link">
                                                <TextCom
                                                    fontWeight="600"
                                                    fontSize="14"
                                                    marginLeft="15"
                                                >{data.name}</TextCom>
                                            </Link>
                                        </li>
                                    )
                                })
                            }

                            <li style={{ borderBottom: "1px solid #dcdcdc" }}>
                                <AiOutlineWifi />
                                <Link to="/contact" className="link">
                                    <TextCom
                                        fontWeight="600"
                                        fontSize="14"
                                        marginLeft="15"
                                    >
                                        Career News
                                    </TextCom>
                                </Link>
                            </li>


                            <li style={{ borderBottom: "1px solid #dcdcdc" }}>
                                <Si1Password />
                                <Link to="/contact" className="link">
                                    <TextCom
                                        fontWeight="600"
                                        fontSize="14"
                                        marginLeft="15"
                                    >
                                        Change Password
                                    </TextCom>
                                </Link>
                            </li>


                            <li style={{ borderBottom: "1px solid #dcdcdc" }}>
                                <img src={myanmar} alt="flat" width="15px" height="15px" />
                                <Link to="/contact" className="link">
                                    <TextCom
                                        fontWeight="600"
                                        fontSize="14"
                                        marginLeft="15"
                                    >
                                        Myanmar
                                    </TextCom>
                                </Link>
                            </li>

                            <li>
                                <FiLogOut />
                                <Link to="/contact" className="link">
                                    <TextCom
                                        fontWeight="600"
                                        fontSize="14"
                                        marginLeft="15"
                                    >
                                        Logout
                                    </TextCom>
                                </Link>
                            </li>
                        </ul>

                    </SideBarStyle>

                </SideContainer>
          
        </>
    )
}