import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LunarCalculator from '../components/LunarCalculator'
import Container from 'components/Container'
import theme from '../../config/theme'
import boc from '../../content/blog/breakoutcon/breakout_con_logo.png'

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
          Inspired by the cosmic patterns behind the ancient <em>Lunar Calendar</em>,{" "}
          <strong>TZI Cards</strong> is a unique deck of sixty bridge sized playing cards.
        </p>
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
        <div css={css`text-align: center;`}>
          <h2>Appearing at</h2>
          <Link
            to="/breakout-con-2019"
            aria-label="Breakout Con 2019"
          >
            <img src={boc} />
            <br />
            Breakout Con 2019
        </Link>
        </div>
        <hr />
        <div css={css`text-align: center;`}>
        <h2>Lunar Year Calculator</h2>
          Calculate the Lunar New Years from 1900 to 2080.
        <LunarCalculator />
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
