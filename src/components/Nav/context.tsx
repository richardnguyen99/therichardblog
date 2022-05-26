/**
 * Context API for <Nav /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { NavContextValue, NavProps, NavProviderProps } from "@components/Nav/type";

export const NavContext = React.createContext<NavContextValue>({ activeTab: "home" });
NavContext.displayName = "NavContext";

const NavProvider: React.FC<NavProviderProps> = ({ url, children }) => {
  const [currentTab, setCurrentTab] = React.useState(url);
  const [position, setPosition] = React.useState({
    top: 0,
    left: 0,
    width: 0,
    mounted: false,
  });

  const contextValue = React.useMemo(
    () => ({
      activeTab: currentTab,
      position: {
        top: position.top,
        left: position.left,
        width: position.width,
        mounted: position.mounted,
      },
      onToggleActiveTab: setCurrentTab,
      onUpdatePosition: setPosition,
    }),
    [currentTab, position.left, position.mounted, position.top, position.width]
  );

  return <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>;
};

export default NavProvider;
