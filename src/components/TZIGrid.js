import React from 'react'
import { css } from '@emotion/core'

const gridCss = css`
  img, .eb {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }
  .col {
    width: 32%;
    max-width: 200px;
    text-align: center;
  }
`

export default function TZIGrid({data}) {
  return (
    <div css={gridCss}>
      <div className="row">
        <div className="col">
          {data[0]}
        </div>
        <div className="col">
          {data[8]}
        </div>
        <div className="col">
          {data[4]}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {data[9]}
        </div>
        <div className="col">
          {data[5]}
        </div>
        <div className="col">
          {data[1]}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {data[6]}
        </div>
        <div className="col">
          {data[2]}
        </div>
        <div className="col">
          {data[10]}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {data[3]}
        </div>
        <div className="col">
          {data[11]}
        </div>
        <div className="col">
          {data[7]}
        </div>
      </div>
    </div>
  )
}

