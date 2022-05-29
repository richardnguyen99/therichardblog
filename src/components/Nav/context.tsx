/**
 * Context API for <Nav /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { useLocation } from "@reach/router";

import { NavContextValue, NavProps, NavProviderProps } from "@components/Nav/type";

export const NavContext = React.createContext<NavContextValue>({ activeTab: "home" });
NavContext.displayName = "NavContext";

const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
  const location = useLocation();

  const getUrl = React.useCallback((pathname: string) => {
    const url = pathname.split("/")[1];

    return url === "" ? "home" : url;
  }, []);

  const [currentTab, setCurrentTab] = React.useState(getUrl(location.pathname));

  const [position, setPosition] = React.useState({
    top: 0,
    left: 0,
    width: 0,
    mounted: false,
  });

  const handleUpdateCurrentTab = React.useCallback((tab: string) => {
    setCurrentTab(tab);
  }, []);

  const contextValue = React.useMemo(
    () => ({
      activeTab: currentTab,
      position: {
        top: position.top,
        left: position.left,
        width: position.width,
        mounted: position.mounted,
      },
      onToggleActiveTab: handleUpdateCurrentTab,
      onUpdatePosition: setPosition,
    }),
    [
      currentTab,
      handleUpdateCurrentTab,
      position.left,
      position.mounted,
      position.top,
      position.width,
    ]
  );

  React.useEffect(() => {
    setCurrentTab(getUrl(location.pathname));
  }, [getUrl, location]);

  return <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>;
};

export default NavProvider;
