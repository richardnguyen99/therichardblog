/**
 * Core Tooltip components
 *
 * @author Richard Nguyen
 */
import * as React from "react";

import { TooltipProps } from "./type";
import { StyledToolTip, StyledToolTipWrapper } from "./style";

const Tooltip: React.FC<TooltipProps> = ({ text, show, children }) => {
  // timeoutRef is to keep track of the current timeout in the component
  // This will prevent users from hovering on and off the component too fast.
  const timeoutRef = React.useRef<NodeJS.Timeout>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const [isMouseOn, setMouseOn] = React.useState(false);

  const handleClick = () => {
    tooltipRef.current.style.opacity = "0";
    tooltipRef.current.style.transform = "scale(1)";
  };

  const handleMouseEnter = React.useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setMouseOn(true);
    }, 1000);
  }, [setMouseOn]);

  const handleMouseLeave = () => {
    setMouseOn(false);
    clearTimeout(timeoutRef.current);
  };

  React.useEffect(() => {
    const shouldShow = show && isMouseOn;

    tooltipRef.current.style.opacity = shouldShow ? "1" : "0";
    tooltipRef.current.style.scale = shouldShow ? "1.2" : "1";
  }, [show, isMouseOn]);

  return (
    <StyledToolTipWrapper>
      <StyledToolTip ref={tooltipRef} style={{ opacity: 0 }}>
        {text}
      </StyledToolTip>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        {children}
      </div>
    </StyledToolTipWrapper>
  );
};

export default Tooltip;
