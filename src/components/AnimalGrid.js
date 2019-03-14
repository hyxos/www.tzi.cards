import React from 'react'
import TZIGrid from './TZIGrid'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { css } from '@emotion/core'
import Img from "gatsby-image"

const animalLinkCss = css`
  &:hover {
    background-color: #eaeaea;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
    query {
      allFile(filter: {
        relativeDirectory: {eq: "animals"}
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
        let refStr = node.name.substring(0, node.name.length - 5)
        return (
          <div name={refStr} onClick={() => navigate(refStr)}>
            <Img css={animalLinkCss} key={node.id} fluid={node.childImageSharp.fluid}  />
          </div>
      )})
    
      const animals = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "pig" ]

      // Sort image tags in proper order before sending to TZIGrid
      imgTags = imgTags.sort(function(a,b) {
        return animals.indexOf( a.props.name ) - animals.indexOf( b.props.name )})
    
      return (
        <div>
          <TZIGrid data={imgTags}/>
        </div>
      )
    }}
  />
)
