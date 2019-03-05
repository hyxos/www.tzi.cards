import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from 'components/Container'
import LunarCalculator from 'components/LunarCalculator'
import theme from '../../config/theme'

export default ({ data: { site } }) => {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
        <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <h1>Lunar Year Calculator</h1>
        <LunarCalculator />
      </Container>
    </Layout>
  )
}

export const calcQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
