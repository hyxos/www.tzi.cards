import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'

const Hero = () => (
  <section
    css={css`
      * {
        color: ${theme.colors.white};
      }
      width: 100%;
      background: ${theme.brand.primary};
      padding: 20px 0 30px 0;
      display: flex;
    `}
  >
    <Container
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <h1
        css={css`
          position: relative;
          z-index: 5;
          line-height: 1.5;
          margin: 0;
          max-width: ${rhythm(15)};
        `}
      >
        Your blog says the things you want to say.
      </h1>
    </Container>
    <div
      css={css`
        height: 150px;
        overflow: hidden;
      `}
    />
  </section>
)

const PostTitle = styled.h2`
  margin-bottom: ${rhythm(0.3)};
  transition: ${theme.transition.ease};
  :hover {
    color: ${theme.brand.primary};
    transition: ${theme.transition.ease};
  }
`

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

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
        There are a few differences that should be kept in mind.
      </p>
      <h4>TZI Cards vs Traditional Playing Cards</h4>
      <ul>
        <li>Seniority vs Rank (Cards Ordering of Value increases as 
          the card number decreases vs deuce low ace high)</li>
        <li>Five suits instead of four (Wood, Fire, Earth, Metal, Water 
          vs Hearts, Diamonds, Clubs, Spades)</li>
        <li>Twelve cards in a suit instead of thirteen</li>
        <li>Sixty cards instead of Fifty-two</li>
        <ul><li>12 animals X 5 elements vs 13 cards x 4 suits</li></ul>
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
