import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
import Container from 'components/Container'
import Layout from '../components/Layout'
import NiandaiTable from '../components/NiandaiTable'
import { fonts } from '../lib/typography'
import Share from '../components/Share'
import config from '../../config/website'
import { bpMaxSM } from '../lib/breakpoints'
import theme from '../../config/theme'

export default function Niandai({
  data: { site, mdx, dJson, icon },
  pageContext: { next, prev },
}) {
  const title = mdx.frontmatter.title
  const banner = icon
  const order = mdx.frontmatter.order
  const tableData = dJson.edges[0].node
  const bgColor = tableData['polarity'] === 'yin' ? theme.colors[tableData['color']] : ''

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
          <h1
            css={css`
              text-align: center;
              margin-bottom: 20px;
            `}
          >
            {title}
          </h1>
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
            {order && <h2>Order: {order}</h2>}
          </div>
          {banner && (
            <div
              css={css`
                padding: 30px;
                ${bpMaxSM} {
                  padding: 0;
                }
              `}
            >
              <Img
                sizes={banner.childImageSharp.fluid}
                css={css`background-color: ${bgColor};`}
                alt={site.siteMetadata.keywords.join(', ')}
              />
            </div>
          )}
          <br />
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
          <NiandaiTable data={tableData} />
          {console.log(tableData)}
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

export const niandaiQuery = graphql`
  query($id: String!, $title: String!, $icon: String!) {
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
      kind: {eq: "niandai"}
      title: {eq: $title}
    }){
      edges {
        node {
          title
          seniority
          order
          color
          polarity
          animal_chinese
          animal_pinyin
          earthly_branch_chinese
          earthly_branch_pinyin
          earthly_branch_letter
          years
        }
      }
    }
    icon: file(name: { eq: $icon } ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
