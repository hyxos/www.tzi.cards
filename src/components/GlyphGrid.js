import React from 'react'
import TZIGrid from './TZIGrid'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../config/theme'
import Img from "gatsby-image"

const glyphLinkCss = css`
  border: 3px solid #eaeaea;
  border-radius: 3px;
  &:hover {
    border: 3px solid ${theme.colors.link_color_hover}
  }
`

export default () => (
  <StaticQuery
    query={graphql`
    query {
      allFile(filter: {
        relativeDirectory: {eq: "basic_glyphs"}
        extension: {eq: "png"}
    }) { 
         edges {
           node {
            id
            name
            childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
           }
         }
       }
     }
    }
    `}

    render={data => {
      let imgTags = data.allFile.edges.map(({ node }) => {
        let name = node.name.substring(0, node.name.length - 6)
        let refStr = `glyphs/${name}`
        return (
          <div key={node.id} name={name} css={glyphLinkCss} onClick={() => navigate(refStr)}>
            <Img fluid={node.childImageSharp.fluid}  />
          </div>
      )})
    
      let latin = ['tzi', 'cho', 'yeen', 'mao', 'chen', 'si', 'wu', 'wei', 'shen', 'yow', 'shu', 'hai']
      console.log(imgTags)
      // Sort image tags in proper order before sending to TZIGrid
      imgTags = imgTags.sort(function(a,b) {
        return latin.indexOf( a.props.name ) - latin.indexOf( b.props.name )})
    
      return (
        <div>
          <TZIGrid data={imgTags}/>
        </div>
      )
    }}
  />
)
