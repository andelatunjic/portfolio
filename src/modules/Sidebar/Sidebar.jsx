import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { OptionsContext } from "../../context/OptionsContext";
import { auth } from "../../firebase/firebase";
import Home from "../../assets/images/home.png";
import Skills from "../../assets/images/settings.png";
import Experience from "../../assets/images/portfolio.png";
import Login from "../../assets/images/login.png";
import Logout from "../../assets/images/logout.png";
import Close from "../../assets/images/close.png";
import CloseDark from "../../assets/images/closeDark.png";
import MenuItem from "../../components/MenuItem/MenuItem";
import Logo from "../../components/Logo/Logo";
import {
  SidebarWrapper,
  Header,
  CloseIcon,
  Navigation,
  LogoutWrapper,
  Content,
} from "./SidebarStyle";

const Sidebar = ({ closeMenu, show }) => {
  const { darkMode, authUser } = useContext(OptionsContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const logoutHandler = () => {
    try {
      auth.signOut();
      localStorage.removeItem("userToken");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SidebarWrapper show={show} dark={darkMode}>
      <Header>
        <CloseIcon src={darkMode ? Close : CloseDark} onClick={closeMenu} />
        <Logo isSidebar />
      </Header>
      <Navigation>
        <Content onClick={closeMenu}>
          <MenuItem
            imgSrc={Home}
            imgAlt="Home"
            itemText={t("firstNavItem")}
            path="/"
          />
          <MenuItem
            imgSrc={Skills}
            imgAlt="Skills"
            itemText={t("secondNavItem")}
            path="/skills"
          />
          <MenuItem
            imgSrc={Experience}
            imgAlt="Experience"
            itemText={t("thirdNavItem")}
            path="/experience"
          />
        </Content>
        <LogoutWrapper onClick={closeMenu}>
          {authUser ? (
            <MenuItem
              logout
              onClick={logoutHandler}
              imgSrc={Logout}
              imgAlt="Logout"
              itemText={t("fifthNavItem")}
            />
          ) : (
            <MenuItem
              imgSrc={Login}
              imgAlt="Login"
              itemText={t("forthNavItem")}
              path="/login"
            />
          )}
        </LogoutWrapper>
      </Navigation>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  closeMenu: PropTypes.func,
  show: PropTypes.bool,
};

export default Sidebar;
