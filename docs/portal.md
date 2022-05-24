# How to implement Portal components in Gatsby

Author: Richard Nguyen <richard.ng0616@gmail.com>

Date: 2022-05-24

Short: This document briefly describes how Portal components are implemented in the site.

## Overview

[React Portal Documentation](https://reactjs.org/docs/portals.html)

> Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```js
ReactDOM.createPortal(child, container);
```

The first argument, _child_, is any [renderable React child](https://reactjs.org/docs/react-component.html#render), such as an element, string, or fragment. The second argument, _container_, is a DOM element, which can be retrieved by functions such as, `document.getElementByID`.

With that description, _child_ can be as easily defined as other React components. The only issue is in the _container_. React originally requires another DOM element that is the same level as `root` or `__gatsby` in `public/index.html`, which cannot be done in Gatsby because Gatsby generates the file after build time.

This document mainly focuses on how to implement Portal components and how other modal components are designed in this site. It won't cover what a Portal component is. See more at [](https://reactjs.org/docs/portals.html)

## Design

There are many ways to overcome this issue:

- Use a plugin ([https://www.gatsbyjs.com/plugins/gatsby-plugin-portal/](https://www.gatsbyjs.com/plugins/gatsby-plugin-portal/))
- Add the `onRenderBody` API code to `gatsby-ssr.js` file in your root project.

This site follows the second option. The reasons are that firstly, it's easy to do manually and moreover, it has more controls over what more details and how many modal components it wants to add.

Next, a `<Portal>` component is defined as a wrapper element that takes _children_ and _type_ as necessary parameters for `React.createPortal(children, document.getElementById(type))`. See more details later.

## Detail

Firstly, the documentation is based on [`onRenderBody`](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody). If more clarification is needed, please see the original documentation on Gatsby.

Simly, in `gatsby-ssr.js`:

```jsx
export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([<div key="portal" id="modal" />]); // `id` can be set to others if desired.
};

export const wrapRootElement = ({ element }) => {
  return <>{/* Necessary components ... */}</>;
};
```

Now, the problem with _container_ in Gatsby is solved. Next, `<Portal>` , defined in `./src/Portal.tsx`, is as mentioned before a wrapper that internally renders children nodes to the specified DOM element using `React.createPortal`.

The reason why the component using `useEffect()` is to check if the element has been mounted to the DOM or not. If there is no such safe guardcheck, building process will crash since `document` object is undefined at build time
