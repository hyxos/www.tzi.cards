import React from 'react'
import { css } from '@emotion/core'
import Container from 'components/Container'
import theme from '../../config/theme'
import tzi_latin from '../images/tzi.png'

const Hero = () => (
    <section
      css={css`
        * {
          color: ${theme.colors.white};
        }
        width: 100%;
        background-image: linear-gradient(${theme.brand.primary}, ${theme.colors.primary_dark});
        padding: 0 0 0 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <span style={{
            textAlign: 'center'
            }}
        >
            <img className="" src={tzi_latin} alt="TZI Logo"
                style={{
                width: '350px',
                marginBottom:'0',
                }}
            />
            <h3 css={css`
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            text-align: center;

          `}>An Ancient Past, A New Beginning</h3>
        </span>
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