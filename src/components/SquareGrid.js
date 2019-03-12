import React from 'react'
import { css } from '@emotion/core'

const gridCss = css`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .col {
    width: 32%;
  }
`

export default function SquareGrid() {
  return (
    <div css={gridCss}>
      <div className="row">
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>  
      </div>
      <div className="row">
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>  
      </div><div className="row">
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>  
      </div><div className="row">
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>
        <div className="col">
          <img src="https://via.placeholder.com/100" />
        </div>  
      </div>
    </div>
  )
}

