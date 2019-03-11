import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Row, Col } from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css"
import { navigate } from 'gatsby'

const EarthlyBranchCell = props =>
  <div css={css`
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
          <Row gutter={15} justify="space-around" align="middle">
            <Col span={3}>
              {cells[0]}
            </Col>
            <Col span={3}>
              {cells[4]}
            </Col>
            <Col span={3}> 
              {cells[8]}
            </Col>
          </Row>
          <Row gutter={15} justify="space-around">
            <Col span={3}>
              {cells[9]}
            </Col>
            <Col span={3}>
              {cells[1]}
            </Col>
            <Col span={3}>
              {cells[5]}
            </Col>
          </Row>
          <Row gutter={15} justify="space-around">
            <Col span={3}>
              {cells[5]}
            </Col>
            <Col span={3}>
              {cells[10]}
            </Col>
            <Col span={3}>
              {cells[2]}
            </Col>
          </Row>
          <Row gutter={15} justify="space-around">
            <Col span={3}>
              {cells[3]}
            </Col>
            <Col span={3}>
              {cells[7]}
            </Col>
            <Col span={3}>
              {cells[11]}
            </Col>
          </Row>
        </div>
      )
    }}
  />
)
