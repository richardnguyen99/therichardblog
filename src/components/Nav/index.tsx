/**
 * Index file for <Nav /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { NavProps, NavTabProps } from "./type";
import { StyledActiveLink, StyledNav, StyledNavItem } from "./style";
import NavProvider, { NavContext } from "./context";

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

const exported = Object.assign(Nav, {
  Provider: NavProvider,
  Tab: NavTab,
});

export default exported;
