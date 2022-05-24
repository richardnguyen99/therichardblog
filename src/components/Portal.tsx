/**
 * Index file for <Portal /> component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import * as ReactDOM from "react-dom";

interface PortalProps {
  type: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Portal: React.FC<PortalProps> = ({ children, type }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    console.log(mounted);
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, [mounted]);

  return mounted ? ReactDOM.createPortal(children, document.getElementById(type)) : null;
};

export default Portal;
