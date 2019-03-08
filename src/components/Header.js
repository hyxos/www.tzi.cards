import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../config/theme'
import logo from '../images/black_tzi_glyph.svg'
import Container from './Container'
import { StaticQuery, graphql } from 'gatsby'

const Header = ({
  dark,
  bgColor = 'none',
  siteTitle,
  headerColor = 'black',
}) => (
  <header
    css={css`
      width: 100%;
      flex-shrink: 0;
      background: none;
      padding: 30px 0 0 0;
      margin: auto;
      background: ${dark ? '#090909' : `${bgColor}` || 'none'};
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={css`
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-content: space-between;
          align-items: center;
          color: ${headerColor};
          a {
            color: ${headerColor ? headerColor : theme.colors.body_color};
          }
          a:hover {
            color: ${headerColor === theme.colors.white
              ? 'white'
              : theme.colors.link_color_hover};
          }
        `}
      >
        <span css={css`width: 80px;`}>
        <Link to="/" aria-label="go to homepage" activeClassName="active">
          <img src={logo} alt="TZI Logo"
            css={css`
            background-color: #FAEBD7;
            border: 1px solid #080808;
            border-radius: 5px;
            height: 60px;
            margin-bottom: 0;
            `
            }
          />
        </Link>
        </span>
        <span css={css`width: 80px;`}>
        <Link to="/deck" aria-label="go to deck" activeClassName="active">
          Deck
        </Link>
        </span>
        <span css={css`width: 80px;`}>
        <Link to="/games" aria-label="go to deck" activeClassName="active" >
          Games
        </Link>
        </span>
        <span css={css`width: 80px;`}>
        <a
            href="https://shop.tzi.cards/products/tzi-playing-cards"
            aria-label="Shop"
            className="button-tertiary"
          >
            Shop
        </a>
        </span>
      </nav>
    </Container>
  </header>
)

export default Header

export const headerQuery = 
<StaticQuery query={graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
}/>
