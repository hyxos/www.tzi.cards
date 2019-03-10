import React from 'react'
import { css } from '@emotion/core'

export const row = css`
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
`
export const column = css`

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
`


const EarthlyBranchCell = props =>
<div css={column}>
  <div className="column">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      >
        <text x="50" y="50" textAnchor="middle" alignmentBaseline="middle" fontSize="60px" fontFamily="serif">{props.value}</text>
    </svg>
  </div>
</div>

const EarthlyBranchGrid = props => 
  <div css={row}>
    <div className="row">
      <EarthlyBranchCell value={props.values[0]}/>
      <EarthlyBranchCell value={props.values[1]}/>
      <EarthlyBranchCell value={props.values[2]}/>
    </div>
    <div className="row">
      <EarthlyBranchCell value={props.values[3]}/>
      <EarthlyBranchCell value={props.values[4]}/>
      <EarthlyBranchCell value={props.values[5]}/>
    </div>
    <div className="row">
      <EarthlyBranchCell value={props.values[6]}/>
      <EarthlyBranchCell value={props.values[7]}/>
      <EarthlyBranchCell value={props.values[8]}/>
    </div>
    <div className="row">
      <EarthlyBranchCell value={props.values[9]}/>
      <EarthlyBranchCell value={props.values[10]}/>
      <EarthlyBranchCell value={props.values[11]}/>
    </div>
  </div>

export default EarthlyBranchGrid