/**
 * Index file for <Tooltip />  components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import * as ReactDOM from "react-dom";

import { StyledBaseTooltip } from "./style";
import { TooltipProps } from "./type";
import Portal from "@components/Portal";

const Tooltip: React.FC<TooltipProps> = ({ text, children, ...rest }) => {
  const wrapperRef = React.useRef<HTMLElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const [showing, setShowing] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => {
    setShowing(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setShowing(false);
  }, []);

  const renderWrapper = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = {
          ref: wrapperRef,
          onMouseEnterCallback: handleMouseEnter,
          onMouseLeaveCallback: handleMouseLeave,
        };
        return React.cloneElement(child, childProps);
      }
    });
  };

  React.useLayoutEffect(() => {
    if (tooltipRef.current !== null) {
      const oldTooltipRect = tooltipRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();

      tooltipRef.current.style.top = wrapperRect.top + 40 + "px";
      tooltipRef.current.style.left =
        wrapperRect.left - oldTooltipRect.width / 2 + wrapperRect.width / 2 + "px";
    }
  }, [showing]);

  const tooltipComponent = (
    <StyledBaseTooltip ref={tooltipRef} {...rest}>
      {text}
    </StyledBaseTooltip>
  );

  return (
    <>
      {renderWrapper()}
      {showing && ReactDOM.createPortal(tooltipComponent, document.getElementById("modal"))}
    </>
  );
};

export default Tooltip;
