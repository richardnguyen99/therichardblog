/**
 * Context API for Navbar component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { NavbarContextValue } from "./type";

const NavbarContext = React.createContext<NavbarContextValue>({});
NavbarContext.displayName = "NavbarContext";

export default NavbarContext;
