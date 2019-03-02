import React from 'react'
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query newYears {
        allDataJson {
          edges {
            node {
            seniority
            years
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>{data.allDataJson.edges[0].node.years}</h1>
      </header>
    )}
  />
)
