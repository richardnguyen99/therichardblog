/**
 * Index file for <PreviewLink /> component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import * as ReactDOM from "react-dom";

import { PreviewLinkProps } from "./type";
import { StyledPreviewLink, StyledPreviewFrame } from "./style";
import Portal from "@components/Portal";

const PreviewLink: React.FC<PreviewLinkProps> = ({
  url,
  text,
  onMouseEnterCallback,
  onMouseLeaveCallback,
  ...rest
}) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const [hovering, setHovering] = React.useState(false);

  const handleMouseEnter = React.useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (typeof onMouseEnterCallback !== "undefined") onMouseEnterCallback(evt);
      setHovering(true);
    },
    [onMouseEnterCallback]
  );

  const handleMouseLeave = React.useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (typeof onMouseLeaveCallback !== "undefined") onMouseLeaveCallback(evt);

      setHovering(false);
    },
    [onMouseLeaveCallback]
  );

  React.useEffect(() => {
    if (!hovering || !linkRef) return;

    const linkRefRect = linkRef.current.getBoundingClientRect();
    const windowScr = window.screen;
    const bodyElm = document.getElementsByTagName("body")[0];
    const bodyElmRect = bodyElm.getBoundingClientRect();

    console.log(linkRefRect.top);
    console.log(bodyElmRect.top);

    if (linkRefRect.top + 300 < window.innerHeight) {
      iframeRef.current.style.top = linkRefRect.top + 30 - bodyElmRect.top + "px";
    } else {
      iframeRef.current.style.top = linkRefRect.top - 300 - bodyElmRect.top + "px";
    }

    iframeRef.current.style.left = linkRefRect.left + "px";
  }, [hovering]);

  return (
    <StyledPreviewLink
      ref={linkRef}
      href={url}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}>
      {text}
      {hovering &&
        ReactDOM.createPortal(
          <StyledPreviewFrame ref={iframeRef} src={url} />,
          document.getElementById("modal")
        )}
    </StyledPreviewLink>
  );
};

export default PreviewLink;
