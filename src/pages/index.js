import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LunarCalculator from '../components/LunarCalculator'
import Container from 'components/Container'
import theme from '../../config/theme'
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
        <p>
          Inspired by the cosmic patterns behind the ancient <em>Lunar Calendar</em>,{" "}
          <strong>TZI Cards</strong> is a unique deck of sixty bridge sized playing cards.
        </p>
        <div css={css`text-align: center;`}>
          <h2>Lunar Year Calculator</h2>
          Calculate the Lunar New Years from 1900 to 2080.
          <LunarCalculator />
        </div>
        <h3>Explore TZI Cards</h3>
        <ul>
          <li>
            Learn about the cards and see the details of the <Link to="/deck" aria-label="go to deck" activeClassName="active">Deck</Link>.
            </li>
          <li>
            Check out the rules for the <Link to="/games" aria-label="go to deck" activeClassName="active" >Games</Link>.
            </li>
          <li>
            Learn about the backstory and <Link to="/lore" aria-label="go to deck" activeClassName="active" >Lore</Link>.
            </li>
        </ul>
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
    icon: file(name: { eq: "front_page" } ) {
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
