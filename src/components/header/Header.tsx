import React,{useState} from "react";
import { Link } from "react-router-dom";
import { HeaderStyle, Right, Left, MobileHeader } from "theme";
import { logo, myanmar, avatar, sideLogo, user } from "assets";
import { TextCom, SideBarCom } from "components";

type HeaderStyleProps = {
    id: string
}

const list = [
  "Home",
  "My Profile",
  "Dashboard",
  "Job Alerts",
  "Recommended Jobs",
  "Applications",
  "Employeer Views",
  "Messages",
  "News"
]

export const HeaderCom:React.FC<HeaderStyleProps> = () => {

  const [hide,setHide] = useState<boolean>(false);

  return (
    <>
      <HeaderStyle>


        <MobileHeader>

          <div className="left_logo" onClick={() => setHide(!hide)}>
            <img src={user} alt="websiteLogo" />
            <div className="hambuger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="searchBox">
            <i className="fa-solid fa-magnifying-glass me-2" style={{color:"gray"}}></i>
            <input type="text" placeholder="Search Jobs,Companies,..." />
          </div>

          <img src={sideLogo} alt="jobnetLogo" className="jobNetLogo" />

        </MobileHeader>

        <Right>
          <img src={logo} alt="jobLogo" />
        </Right>

        <Left>
          <ul>
            {
              list.map((data: string, index: number) => (
                <li key={index}>
                  <Link to="/" className="link">
                    <TextCom fontSize="13" color="#524f4f" fontWeight="600" marginLeft="28"
                      hoverColor="salary"
                    >{data}</TextCom>
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className="myanmar">
            <img src={myanmar} alt="flash" />
          </div>
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
        </Left>

        <SideBarCom hide={hide} setHide={setHide}/>

      </HeaderStyle>
    </>
  )
}