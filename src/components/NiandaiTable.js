import React from 'react'
import { css } from '@emotion/core'

const cardStyles = css`
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

const NiandaiTable = ({ data }) => {
  
  const cardInfo = Object.entries(data).map(([key, value]) => {
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{value.toString()}</td>
      </tr>
    );
  })
  return (
    <div>
      <table css={cardStyles}>
        <tbody>
          {cardInfo}
        </tbody>
      </table>
    </div>
  )
}

export default NiandaiTable