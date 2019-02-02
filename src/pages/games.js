import React from 'react'
import { Link } from 'gatsby'
import Container from 'components/Container'
import Layout from '../components/Layout'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'
import { css } from '@emotion/core'

const GamesPage = ({ data: { site } }) => {
  return (
    <Layout site={site} dark>
    <section
      css={css`
        padding: 100px 0 20px 0;
        ${bpMaxMD} {
          padding: 40px 0;
        }
        ${bpMaxSM} {
          padding: 20px 0;
        }
      `}
      >
      <Container maxWidth={920}>
          <div
            css={css`
              margin-top: 50px;
              ${bpMaxSM} {
                margin-top: 50px;
                border-top: 1px solid #f1f1f1;
                padding-top: 30px;
              }
            `}
          >
          </div>
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
      </Container>
    </section>
    </Layout>
  )
}

export default GamesPage

export const gamesPageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
