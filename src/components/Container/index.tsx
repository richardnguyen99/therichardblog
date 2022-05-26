/**
 * Index file for <Container /> class
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { BaseContainerProps, ContainerProps } from "./type";
import { StyledBaseContainer, StyledBlogContainer, StyledMainContainer } from "./style";

const Container: React.FC<ContainerProps> = ({ maxWidth, children, ...rest }) => {
  return (
    <StyledBaseContainer style={{ maxWidth: `${maxWidth}px` }} {...rest}>
      {children}
    </StyledBaseContainer>
  );
};

const BlogContainer: React.FC<BaseContainerProps> = ({ children, ...rest }) => {
  return <StyledBlogContainer {...rest}>{children}</StyledBlogContainer>;
};

const MainContainer: React.FC<BaseContainerProps> = ({ children, ...rest }) => {
  return <StyledMainContainer {...rest}>{children}</StyledMainContainer>;
};

const exported = Object.assign(Container, {
  Main: MainContainer,
  Blog: BlogContainer,
});

export default exported;
