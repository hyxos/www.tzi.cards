import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby';

export const gridCss = css`
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
`

const EarthlyBranchCell = props =>
  <div>
    {props.ch}
  </div>

export default () => (
  <StaticQuery
    query={graphql`
    query {
      allDataJson (filter: {
            kind: {eq: "animal"}}
            sort: { fields: [order], order: ASC }
            ){
            edges {
              node {
                id
                earthly_branch_chinese
                earthly_branch_pinyin
                latin
            }
          }
        }
      }
    `}

    render={data => {
      const cells = data.allDataJson.edges.map(({ node }) => (
        <div key={node.id}>
          <EarthlyBranchCell ch={node.earthly_branch_chinese} pinyin={node.earthly_branch_pinyin} />
        </div>
        )
      )
      
      return (
        <div css={gridCss}>
          <div className="row">
            <div className="column">
              {cells[0]}
            </div>
            <div className="column">
              {cells[4]}
            </div>
            <div className="column">
              {cells[8]}
            </div>
          </div>
          <div className="row">
            <div className="column">
              {cells[9]}
            </div>
            <div className="column">
              {cells[1]}
            </div>
            <div className="column">
              {cells[5]}
            </div>
          </div>
          <div className="row">
            <div className="column">
              {cells[5]}
            </div>
            <div className="column">
              {cells[10]}
            </div>
            <div className="column">
              {cells[2]}
            </div>
          </div>
          <div className="row">
            <div className="column">
              {cells[3]}
            </div>
            <div className="column">
              {cells[7]}
            </div>
            <div className="column">
              {cells[1]}
            </div>
          </div>
        </div>
      )
    }}
  />
)
