import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Hero from '../components/Hero'
import Container from 'components/Container'
import theme from '../../config/theme'

export default function Index({ data: { site } }) {
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
        <h2>An Ancient Past</h2>
              <p>TZI Cards draw their inspiration from a variety of sources, primarily the ancient
        Chinese system of <em>Ganzhi (干支)</em>. The name, <em>TZI</em>, is in fact a
        {" "}<a href="https://en.wikipedia.org/wiki/Romanization">romanization</a>
                {" "}of the character 子 (pinyin: zǐ), the first <Link to="earthly-branches">Earthly Branch</Link>.
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
              <ul>
                <li>
                  <Link to="in-the-box">In the Box</Link>
                </li>
                <li>
                  <Link to="tzi-card">
                    Anatomy of a TZI Card
                  </Link>
                  <ul>
                    <li>
                      <Link to="polarity">
                        The Darkness and the Light
                      </Link>
                    </li>
                    <li>
                      <Link to="elements">
                        The Five Elements of Change
                      </Link>
                    </li>
                    <li>
                      <Link to="animals">
                        The Twelve Animals
                      </Link>
                    </li>
                    <li>
                      <Link to="seniority">
                        The Order of the Deck
                      </Link>
                    </li>
                    <li>
                      <Link to="earthly-branches">
                        The Earthly Branches
                      </Link>
                    </li>
                    <li>
                      <Link to="heavenly-stems">
                        The Heavenly Stems
                      </Link>
                    </li>
                    <li>
                      <Link to="seniority">
                        Seniority
                      </Link>
                    </li>
                    <li>
                      <Link to="tzi-glyph">
                        The TZI Glyph
                    </Link>
                      <ul>
                        <li>
                          <Link to="trigram">
                            The Trigram of Heaven
                        </Link>
                          <ul>
                            <li>Horizontal Bars</li>
                            <li>Vertical Bars</li>
                            <li>Dots</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Extra Cards
                    <ul>
                        <li>
                          Chinese New Years Cards
                      </li>
                        <li>
                          Formation Cards
                      </li>
                      </ul>
                    </li>
                  </ul>
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
  }
`
