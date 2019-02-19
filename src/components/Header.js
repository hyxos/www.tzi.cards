import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../config/theme'
import logo from '../images/tzi_logo_color.png'
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
      background: ${dark ? '#090909' : `${bgColor}` || 'none'};
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
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
        <Link to="/" aria-label="go to homepage" activeClassName="active">
          <img className="" src={logo} alt="TZI Logo"
            style={{
            height: '70px',
            marginBottom:'0',
            }}
          />
        </Link>
        <Link to="/deck" aria-label="go to deck" activeClassName="active">
          Deck
        </Link>
        <Link to="/games" aria-label="go to deck" activeClassName="active">
          Games
        </Link>
        <a href="https://shop.tzi.cards">
          Store
        </a>
        <div
          css={css`
            font-size: 16px;
            line-height: 1.25;
            display: flex;
            align-items: center;
            a {
              color: ${dark ? '#fbfbfb' : 'rgba(0,0,0,0.85)'};
              text-decoration: none;
              & + a {
                margin-left: 32px;
              }
            }
            .active {
              display: none;
              visibility: hidden;
            }
          `}
        >
          {/*
          <Link
            to="/blog"
            activeClassName="active"
            aria-label="View blog page"
          >
            Blog
          </Link>
          */}
        </div>
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
