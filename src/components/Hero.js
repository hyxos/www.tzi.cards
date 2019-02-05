import React from 'react'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'
import tzi_latin from '../images/tzi_latin_yellow.svg'

const Hero = () => (
    <section
      css={css`
        * {
          color: ${theme.colors.white};
        }
        width: 100%;
        background: ${theme.brand.primary};
        padding: 0 70px 0 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <img className="" src={tzi_latin} alt="TZI Logo"
              style={{
              height: '200px',
              marginBottom:'0',
              }}
        />
        <h4
          css={css`
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            text-align: center;
            max-width: ${rhythm(20)};
          `}
        >
          An Ancient Past, A New Beginning...
        </h4>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
  
  export default Hero