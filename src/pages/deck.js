import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Container from 'components/Container'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'
import { css } from '@emotion/core'
import { List } from 'semantic-ui-react'

const DeckPage = ({ data: { site } }) => {
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
            <div>
              <h2>An Ancient Past</h2>
              <p>TZI Cards draw their inspiration from a variety of sources, primarily the ancient
        Chinese system of <em>Ganzhi (干支)</em>. The name, <em>TZI</em>, is in fact a
        {" "}<a href="https://en.wikipedia.org/wiki/Romanization">romanization</a>
                {" "}of the character 子 (pinyin: zǐ), the first <Link to="earthly-branch">Earthly Branch</Link>.
                In its origins, Ganzhi was primarily used as a way of
        organizing time through a <a href="https://en.wikipedia.org/wiki/Sexagenary_cycle">
                  sexagenary</a> (base-60) cycle. The sixty cards of the deck correspond
    to the sixty units of the Ganzhi cycle. The yearly celebration of "Chinese New Year",
    a global event that reaches far beyond the borders of China,
    is rooted in Ganzhi.
      </p>
              <h2>A New Beginning</h2>
              <p>
                TZI Cards incorporate a new figure, the <strong>TZI Glyph</strong>, visually inspired
        by the <em><Link to="trigram">Trigram of Heaven</Link></em>: ☰, which is described in another
        ancient Chinese work called the <em>I Ching</em> (aka: <strong><a href="https://en.wikipedia.org/wiki/I_Ching">
                  The Book of Changes</a></strong>). The TZI
    Glyph can be used as a key to differentiate each card and reveal patterns that exist
    between the cards.
      </p>
              <h3>The Deets</h3>
              <List bulleted>
                <List.Item>
                  <Link to="in-the-box">In the Box</Link>
                </List.Item>
                <List.Item>
                  <Link to="tzi-card">
                    Anatomy of a TZI Card
                  </Link>
                  <List.List>
                    <List.Item>
                      <Link to="polarity">
                        The Darkness and the Light
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="elements">
                        The Five Elements of Change
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="animals">
                        The Twelve Animals
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="seniority">
                        The Order of the Deck
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="earthly-branches">
                        The Earthly Branches
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="heavenly-stems">
                        The Heavenly Stems
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="seniority">
                        Seniority
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="tzi-glyph">
                        The TZI Glyph
                    </Link>
                      <List.List>
                        <List.Item>
                          <Link to="trigram">
                            The Trigram of Heaven
                        </Link>
                          <List.List>
                            <List.Item>Horizontal Bars</List.Item>
                            <List.Item>Vertical Bars</List.Item>
                            <List.Item>Dots</List.Item>
                          </List.List>
                        </List.Item>
                      </List.List>
                    </List.Item>
                    <List.Item>
                      Extra Cards
                    <List.List>
                        <List.Item>
                          Chinese New Years Cards
                      </List.Item>
                        <List.Item>
                          Formation Cards
                      </List.Item>
                      </List.List>
                    </List.Item>
                  </List.List>
                </List.Item>
              </List>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default DeckPage

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`