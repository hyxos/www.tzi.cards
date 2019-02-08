import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from 'components/Container'
import theme from '../../config/theme'

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <p>
          Inspired by the cosmic patterns behind the ancient Chinese system of <em>Ganzhi</em>,{" "}
          <strong>TZI Cards</strong> is a unique deck of sixty bridge sized playing cards.
        </p>
        {/* Link to blog posts
        <Link
          to="/blog"
          aria-label="Visit blog page"
          className="button-secondary"
        >
          View all entries
        </Link>
        */}
        <a
          href="https://shop.tzi.cards/products/tzi-playing-cards"
          aria-label="Buy Now"
          className="button-secondary"
        >
          Buy Now!
        </a>
        <hr />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
