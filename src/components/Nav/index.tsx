/**
 * Index file for <Nav /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { CSSTransition } from "react-transition-group";

import { NavProps, NavTabProps } from "./type";
import { StyledActiveLink, StyledNav, StyledNavItem } from "./style";
import NavProvider, { NavContext } from "./context";
import { AboutContent } from "@components/Content/AboutContent";

const NavTab: React.FC<NavTabProps> = React.forwardRef<HTMLDivElement, NavTabProps>(
  (props, ref) => {
    const navContext = React.useContext(NavContext);

    const navTabRef = React.useRef<HTMLDivElement>(null);

    const handleOnClick = React.useCallback(() => {
      navContext.onToggleActiveTab(props.tab);

      const tabRect = navTabRef.current.getBoundingClientRect();

      navContext.onUpdatePosition({
        top: tabRect.top,
        left: tabRect.left,
        width: tabRect.width,
        mounted: true,
      });
    }, [navContext, props.tab]);

    React.useEffect(() => {
      if (navContext.activeTab === props.tab) {
        const tabRect = navTabRef.current.getBoundingClientRect();

        navContext.onUpdatePosition({
          top: tabRect.top,
          left: tabRect.left,
          width: tabRect.width,
          mounted: true,
        });

        const url = props.tab === "home" ? "/" : `/${props.tab}/`;

        window.history.pushState({}, "", url);
      }
    }, [navContext, props.tab]);

    return (
      <StyledNavItem id={props.tab} ref={navTabRef} onClick={handleOnClick} {...props}>
        {props.children}
      </StyledNavItem>
    );
  }
);
NavTab.displayName = "NavLink";

const ActiveLink: React.FC = () => {
  const navTabContext = React.useContext(NavContext);

  return navTabContext.position.mounted ? (
    <StyledActiveLink
      style={{
        width: navTabContext.position.width + "px",
        left: navTabContext.position.left + "px",
      }}
    />
  ) : null;
};

const Nav: React.FC<NavProps> = React.forwardRef<HTMLElement, NavProps>((props, ref) => {
  return (
    <div>
      <StyledNav ref={ref} {...props}>
        {props.children}
      </StyledNav>
      <ActiveLink />
    </div>
  );
});
Nav.displayName = "Nav";

const NavContent: React.FC = () => {
  const navTabContext = React.useContext(NavContext);

  const [oldTab, setOldTab] = React.useState(navTabContext.activeTab);
  const [Component, setComponent] = React.useState(() => <></>);
  const [inProp, setInProp] = React.useState(false);

  React.useEffect(() => {
    setInProp(true);

    if (oldTab === "about") setComponent(() => <AboutContent />);
    else setComponent(() => <h1>Hello, World</h1>);
  }, []);

  React.useEffect(() => {
    if (oldTab !== navTabContext.activeTab) {
      setInProp(false);
      setOldTab(navTabContext.activeTab);
    }
  }, [navTabContext.activeTab]);

  const handleOnExited = React.useCallback(() => {
    if (oldTab == navTabContext.activeTab) {
      setInProp(true);

      if (oldTab === "about") setComponent(() => <AboutContent />);
      else setComponent(() => <h1>Hello, World</h1>);
    }
  }, [oldTab]);

  return (
    <div>
      <CSSTransition
        in={inProp}
        classNames="content-transition"
        timeout={200}
        onExit={handleOnExited}>
        {Component}
      </CSSTransition>
    </div>
  );
};

const exported = Object.assign(Nav, {
  Content: NavContent,
  Provider: NavProvider,
  Tab: NavTab,
});

export default exported;
