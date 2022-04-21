/**
 * Global export for Navbar components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import Navbar from "./Navbar";
import NavbarBrand from "./NavbarBrand";
import NavbarWrapper from "./NavbarWrapper";

export default Object.assign(Navbar, {
  Wrapper: NavbarWrapper,
  Brand: NavbarBrand,
});
