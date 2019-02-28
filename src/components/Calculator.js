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
            new_years
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>{data.allDataJson.edges[0].node.new_years}</h1>
      </header>
    )}
  />
)
