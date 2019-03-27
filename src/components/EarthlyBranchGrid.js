import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { navigate } from 'gatsby'
import TZIGrid from './TZIGrid'

const EarthlyBranchCell = props =>
  <div className="eb" css={css`
        text-align: center;
        margin: 10px;
        width: 90px;
        border: 1px solid #eaeaea;
        border-radius: 5px;
        &:hover {background-color: #FAEBD7;  border: 1px solid #080808;};
        `} 
    onClick={() => {navigate(props.latin)}}>
    <div css={css`
      hieght: 100px;
      font-family: serif;
      font-size: 70px;
      margin-bottom: none;
    `}>
      {props.ch}
    </div>
    <div>
      {props.pinyin}
    </div>
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
          <EarthlyBranchCell ch={node.earthly_branch_chinese} latin={node.latin } pinyin={node.earthly_branch_pinyin} />
        </div>
        )
      )

      return (
        <div>
          <TZIGrid data={cells} />
        </div>
      )
    }}
  />
)
