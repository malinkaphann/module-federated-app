import React from "react";
import cx from "classnames";
import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SkipToContent,
  SideNavLink,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Grid,
  Row,
  Column,
} from "carbon-components-react";
import {
  Search20,
  Notification20,
  Dashboard16,
  User16,
  Product16,
  User20,
  Blog16,
} from "@carbon/icons-react";
import { useNavigate, useMatch, useResolvedPath } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const action = () => {};

  const active = (matched) => {
    return cx({
      active: matched ? true : false,
    });
  };

  const Content = () => (
    <Grid style={{marginTop: "40px"}}>
      <Row>
          <Column sm={12} md={12} lg={{offset: 2, span: 10}}>
            {children}
          </Column>
      </Row>
    </Grid>
  );

  /**
   *
   * @param {*} text no slash
   * @returns
   */
  const MySideNavLink = ({ name, icon }) => {
    const to = "/" + name.toLowerCase();
    const resolved = useResolvedPath(to);
    const matched = useMatch({ path: resolved.pathname, end: true });
    return (
      <SideNavLink
        renderIcon={icon}
        className="clickable"
        onClick={() => {
          navigate(to);
        }}
      >
        <span className={active(matched)}>{name}</span>
      </SideNavLink>
    );
  };

  const TopLeftMenu = () => (
    <HeaderGlobalBar>
      <HeaderGlobalAction
        aria-label="Search"
        onClick={action("search click")}
        className="centered"
      >
        <Search20 />
      </HeaderGlobalAction>

      <HeaderGlobalAction
        aria-label="Notifications"
        onClick={action("notification click")}
        className="centered"
      >
        <Notification20 />
      </HeaderGlobalAction>

      <HeaderGlobalAction
        aria-label="Avatar"
        onClick={action("app-switcher click")}
        tooltipAlignment="end"
        className="centered"
      >
        <User20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  );

  const MySideNav = (isSideNavExpanded) => (
    <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
      <SideNavItems>
        <MySideNavLink name="Dashboard" icon={Dashboard16} />
        <MySideNavLink name="Users" icon={User16} />
        <MySideNavLink name="Products" icon={Product16} />
        <MySideNavLink name="Blog" icon={Blog16} />
      </SideNavItems>
    </SideNav>
  );

  return (
    <div>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <div style={{ marginBottom: "15px" }}>
            <Header aria-label="IBM Platform Name">
              <SkipToContent />

              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />

              <HeaderName href="#" prefix="ECOM">
                Backend
              </HeaderName>

              {TopLeftMenu()}

              {MySideNav(isSideNavExpanded)}
            </Header>
          </div>
        )}
      />
      <Content />
    </div>
  );
};

export default Layout;
