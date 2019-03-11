import React from 'react'
import { css } from '@emotion/core'
import { navigate } from 'gatsby'

const earthlyBranchStyles = css`
    table {
        border-collapse: collapse;
        border: 1px solid #d3d3d3;
    }
    caption {
        border: 15px solid #757d75;
        padding: 10px 15px;
        background-color: #FAEBD7;
    }
    td, td:first-of-type {
        border: 1px solid #cecfd5;
        padding: 10px 15px;
        margin: 10px;
    }
    .center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }
`

const formatNiandai = (niandai) => {
  let begins = niandai[0]
  let ends = niandai[1]
  return (
    <tr key={begins + "-" + ends}>
      <td colSpan="1">{begins}</td><td colSpan="1" >{ends}</td>
    </tr>
  )
}

const extractYears = (years) => {
  return (
    years.map(formatNiandai)
  )
}

const EarthlyBranchTable = ({ data }) => {
  return (
    <table css={earthlyBranchStyles}>
        <caption>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="300"
          hieght="300"
          viewBox="0 0 300 300">
          <text x="50%" y="40%"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="serif"
            fontSize="250px">{data.earthly_branch_chinese}
          </text>
          <text x="50%" y="92%"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="35px">{data.earthly_branch_pinyin}
          </text>
        </svg>
      </caption>
      <tbody>
        <tr>
          <td colSpan="1">Order</td>
          <td colSpan="2">{data.order}</td>
        </tr>
        <tr>
          <td colSpan="1">Romanization</td>
          <td colSpan="2">{data.latin}</td>
        </tr>
        <tr>
          <td colSpan="1" onClick={() => {navigate("animals")}}>Animal</td>
          <td colSpan="2" onClick={() => {navigate(data.animal)}}>{data.animal}</td>
        </tr>
        <tr>
          <td colSpan="1">Meaning</td>
          <td colSpan="2">{data.earthly_branch_meaning}</td>
        </tr>
        <tr>
          <td colSpan="1" rowSpan={data.years.length + 1}>Years</td>
          <td>Begins</td>
          <td>Ends</td>
        </tr>
        {extractYears(data.years)}
      </tbody>
    </table>
  )
}

export default EarthlyBranchTable