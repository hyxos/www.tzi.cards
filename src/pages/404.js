import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LunarCalculator from '../components/LunarCalculator'
import Container from 'components/Container'
import theme from '../../config/theme'
import boc from '../../content/blog/breakoutcon/breakout_con_logo.png'
import { bpMaxSM } from '../lib/breakpoints'

export default function Index({ data: { site, icon } }) {
  const banner = icon
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
        {banner && (
          <div
            css={css`
            padding: 30px;
            ${bpMaxSM} {
              padding: 0;
            }
          `}
          >
            <Img
              sizes={banner.childImageSharp.fluid}
              alt="front_page"
            />
          </div>
        )}
        <div css={css`text-align: center;`}>
            <h2>Whoops</h2>
          </div>
          <div>
          <p>
            Hmmm... looks like we don't have this page up yet.
          </p>
          <p>
            We do apologize, things are still under construction and we will{" "}
            hopefully have this taken care of soon.
          </p>
          <p>
            Thanks for your patience!
          </p>
          <p>
            ~Mu Mao~
          </p>
        </div>
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
    icon: file(name: { eq: "tiger_play" } ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
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
