/**
 * Core SEO component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@gatsbyjs/reach-router";
import { useStaticQuery, graphql } from "gatsby";

import { SEOProps } from "./type";

const SEO: React.FC<SEOProps> = ({ title = "", description = "", image = "", article = "" }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl
          defaultImage: image
          twitterUsername
          github
        }
      }
    }
  `);

  const seo = {
    title: title || site.siteMetadata.defaultTitle,
    description: description || site.siteMetadata.defaultDescription,
    image: `${site.siteMetadata.siteUrl}${image || site.siteMetadata.defaultImage}`,
    url: `${site.siteMetadata.siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={site.siteMetadata.titleTemplate}>
      <link
        href="//db.onlinewebfonts.com/c/501e03d4c0303f394033bcaf435f4b3e?family=Suisse+Int'l+Medium"
        rel="stylesheet"
      />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {site.siteMetadata.twitterUsername && (
        <meta name="twitter:creator" content={site.siteMetadata.twitterUsername} />
      )}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;
