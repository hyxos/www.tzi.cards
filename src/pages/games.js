import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'
import Hero from '../components/Hero'
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
       <blockquote>
        <p>
          Translating ancient Chinese metaphysics into game instructions 
          is more difficult than I anticipated.
          <br />
          <small>~Mu Mao~ <em>The Book of TZI</em></small>
        </p>
      </blockquote>
      <p>Many games that can be played with traditional 
        playing cards can be adapted to play with the TZI deck. 
        There are a few key differences that should be kept in mind.
      </p>
      <h4>TZI Cards vs Traditional Playing Cards</h4>
      <ul>
        <li><Link to="seniority">Seniority</Link> vs Rank (Cards Ordering of Value increases as 
          the card number decreases vs deuce low ace high)</li>
        <li>Five <Link to="elements">elements</Link> instead of four suits (Wood, Fire, Earth, Metal, Water 
          vs Hearts, Diamonds, Clubs, Spades)</li>
        <li>Twelve cards of an element instead of thirteen in a suit</li>
        <li>Sixty cards instead of Fifty-two</li>
        <ul><li>12 <Link to="animals">animals</Link> x 5 elements vs 13 cards x 4 suits</li></ul>
      </ul>
      <p>We encourage you to try playing your favourite card game 
        with the TZI Cards deck (e.g. Rummy, Poker, etc.). Children's 
        games like Old Maid or Go Fish are fun too! In the future
        we plan to add more tutorials for these games in this section of 
        our site.
      </p>
      <hr />
      <h2>Games from TZI Land</h2>
      <hr />
      <h3><Link to="tu-zi">Tǔ Zǐ</Link></h3>
      <h4>2 - 5 Players, 30 Minutes</h4>
      <p>
        <em>Guided by the <Link to="tzi-glyph">TZI Glyph</Link> you compete against opponents 
        to build the most powerful formation.</em>
      </p>
      <p>Developed by Tu Wei. The first game made escpecially for the TZI 
        Cards deck.
      </p>
      <hr />
      <h3>Fighting Numbers</h3>
      <p>Coming soon</p>
      <hr />
      <h3>Dojo</h3>
      <p>Coming soon</p>
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
