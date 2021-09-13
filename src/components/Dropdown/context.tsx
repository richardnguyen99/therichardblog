/**
 * Context API for Dropdown components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { DropdownContextValue } from "./type";

const DropdownContext = React.createContext<DropdownContextValue>({ opening: false });
DropdownContext.displayName = "DropdownContext";

export default DropdownContext;
