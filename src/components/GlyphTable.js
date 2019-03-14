import React from 'react'
import { css } from '@emotion/core'

const glyphStyles = css`
    table {
        border-collapse: collapse;
        border: 1px solid #d3d3d3;
    }
    caption {
        border: 15px solid #757d75;
        padding: 10px 15px;
    }
    td, td:first-of-type {
        border: 1px solid #cecfd5;
        padding: 10px 15px;
        margin: 10px;
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

const GlyphTable = ({ data }) => {
  return (
    <div>
      <table css={glyphStyles}>
        <caption>{data.title}</caption>
        <tbody>
          <tr>
            <td colSpan="1">{data.title}</td>
            <td colSpan="1">{data.animal_chinese}</td>
            <td colSpan="1">{data.animal_pinyin}</td>
          </tr>
          <tr>
            <td colSpan="1">Earthly Branch</td>
            <td colSpan="1">{data.earthly_branch_chinese}</td>
            <td colSpan="1">{data.earthly_branch_pinyin}</td>
          </tr>
          <tr>
            <td colSpan="1">Order</td>
            <td colSpan="2">{data.order}</td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan={data.years.length+1}>Years</td>
            <td>Begins</td>
            <td>Ends</td>
          </tr>
          {extractYears(data.years)}
        </tbody>
      </table>
    </div>
  )
} 

export default GlyphTable