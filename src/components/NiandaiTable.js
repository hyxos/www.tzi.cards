import React from 'react'
import { css } from '@emotion/core'

const niandaiStyles = css`
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const NiandaiTable = ({ data }) => {
  return (
    <div>
      <table css={niandaiStyles}>
        <caption>{data.title}</caption>
        <tbody>
          <tr>
            <td colSpan="1">{capitalizeFirstLetter(data.element)}</td>
            <td colSpan="1">{data.element_chinese}</td>
            <td colSpan="1">{data.element_pinyin}</td>
          </tr>
          <tr>
            <td colSpan="1">{capitalizeFirstLetter(data.animal)}</td>
            <td colSpan="1">{data.animal_chinese}</td>
            <td colSpan="1">{data.animal_pinyin}</td>
          </tr>
          <tr>
            <td colSpan="1">Seniority</td>
            <td colSpan="2">{data.seniority}</td>
          </tr>
          <tr>
            <td colSpan="1">Order</td>
            <td colSpan="2">{data.order}</td>
          </tr>
          <tr>
            <td colSpan="1">Color</td>
            <td colSpan="2">{data.color}</td>
          </tr>
          <tr>
            <td colSpan="1">Earthly Branch</td>
            <td colSpan="1">{data.earthly_branch_chinese}</td>
            <td colSpan="1">{data.earthly_branch_pinyin}</td>
          </tr>
          <tr>
            <td colSpan="1">Heavenly Stem</td>
            <td colSpan="1">{data.heavenly_stem_chinese}</td>
            <td colSpan="1">{data.heavenly_stem_pinyin}</td>
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

export default NiandaiTable