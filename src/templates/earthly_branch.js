import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
import Container from 'components/Container'
import Layout from '../components/Layout'
import EarthlyBranchTable from '../components/EarthlyBranchTable'
import { fonts } from '../lib/typography'
import Share from '../components/Share'
import config from '../../config/website'

export default function EarthlyBranch({
  data: { site, mdx, dJson },
  pageContext: { next, prev },
}) {
  const title = mdx.frontmatter.title
  const tableData = dJson.edges[0].node

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isBlogPost />
      <article
        css={css`
          width: 100%;
          display: flex;
        `}
      >
        <Container>
          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
              h3,
              span {
                text-align: center;
                font-size: 15px;
                opacity: 0.6;
                font-family: ${fonts.regular}, sans-serif;
                font-weight: normal;
                margin: 0 5px;
              }
            `}
          >
          </div>
          <br />
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
          <EarthlyBranchTable data={tableData} />
        </Container>
        {/* <SubscribeForm /> */}
      </article>
      <Container noVerticalPadding>
        <Share
          url={`${config.siteUrl}/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={config.twitterHandle}
        />
        <br />
      </Container>
    </Layout>
  )
}

export const EarthlyBranchQuery = graphql`
  query($id: String!, $latin  : String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        slug
        keywords
        order
      }
      code {
        body
      }
    }
    dJson: allDataJson (filter: {
      kind: {eq: "animal"}
      latin: {eq: $latin}
    }){
      edges {
        node {
          animal
          title
          order
          latin
          animal_chinese
          animal_pinyin
          earthly_branch_chinese
          earthly_branch_pinyin
          earthly_branch_meaning
          years
        }
      }
    }
  }
`
