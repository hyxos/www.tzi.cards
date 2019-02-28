import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from 'components/Container'
import DatePicker from 'components/DatePicker'
import theme from '../../config/theme'
import Calculator from 'components/Calculator'

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
        <DatePicker />
        <Calculator />
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
