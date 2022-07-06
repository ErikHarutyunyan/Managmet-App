import GlobalContainer from "../../themes/Global.styled";
import { HeaderWrapper, HeaderBox } from "./Header.styled";
import {HeaderLogo} from "../Images/"

const Header = ({ userName }) => {
  return (
    <HeaderBox>
        
      <GlobalContainer>
        <HeaderWrapper>
          <div className="header_left">
            <div className="header_left-logo">
              <img src={HeaderLogo} alt="header_logo" />
            </div>
            <div className="header_left-userInfo">
              <p>{userName ? userName : "Admin"} System</p>
            </div>
          </div>
          <div className="header_right">

          </div>
        </HeaderWrapper>
      </GlobalContainer>
    </HeaderBox>
  );
};

export default Header;
