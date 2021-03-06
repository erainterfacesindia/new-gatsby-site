// import React from "react"
// import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// const query = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `

// const SEO = ({ title, description }) => {
//   const { site } = useStaticQuery(query)
//   const metaDescription = description || site.siteMetadata.description
//   return (
//     <Helmet
//       htmlAttributes={{ lang: "en" }}
//       title={`${title}`}
//       meta={[{ name: `description`, content: metaDescription }]}
//     ></Helmet>
//   )   
// }

// export default SEO

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
