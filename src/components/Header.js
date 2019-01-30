import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import MenuBar from './MenuBar'

const Header = ({ dark }) => (
  <header
    css={css`
      position: relative;
      z-index: 999;
      width: 100%;
      flex-shrink: 0;
      background: none;
      padding: 30px 0 0 0;
      ${bpMaxSM} {
        padding: 20px 0 0 0;
      }
      background: ${dark ? '#090909' : 'none'};
    `}
  >
    <MenuBar />
  </header>
)

export default Header
