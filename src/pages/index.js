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

<<<<<<< HEAD
export default function Index({ data: { site, icon } }) {
  const banner = icon
=======
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

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
>>>>>>> upstream/master
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
<<<<<<< HEAD
      > 
      {banner && (
        <div
          css={css`
            padding: 30px;
            ${bpMaxSM} {
              padding: 0;
            }
          `}
=======
      >
        {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: theme.transition.ease,
                ':hover': {
                  color: theme.brand.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </Link>
            </Description>
          </div>
        ))}
        <Link
          to="/blog"
          aria-label="Visit blog page"
          className="button-secondary"
>>>>>>> upstream/master
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
