import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { OptionsContext } from "../../context/OptionsContext";
import Home from "../../assets/images/home.png";
import Skills from "../../assets/images/settings.png";
import Experience from "../../assets/images/portfolio.png";
import Login from "../../assets/images/login.png";
import Logout from "../../assets/images/logout.png";
import Close from "../../assets/images/close.png";
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
  const { darkMode } = useContext(OptionsContext);
  const { t } = useTranslation();

  return (
    <SidebarWrapper show={show} dark={darkMode}>
      <Header>
        <CloseIcon src={Close} onClick={closeMenu} />
        <Logo isSidebar />
      </Header>
      <Navigation>
        <Content onClick={closeMenu}>
          <MenuItem imgSrc={Home} imgAlt="Home" itemText={t("firstNavItem")} path="/" />
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
          <MenuItem
            imgSrc={Logout}
            imgAlt="Logout"
            itemText={t("forthNavItem")}
            path="/login"
          />
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
