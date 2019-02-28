import React from 'react'
import { css } from '@emotion/core'
import theme from '../../config/theme'
import DD from '../scripts/dd'

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

const hasElement = (data) => {
  return data['element'] ? data['element'] : null
}

const Card = ({ data }) => {
  let dd = new DD()
  let fullName = hasElement(data) ? data['element'] + "_" + data['animal'] : data['animal']
  let iconName = dd.dd(data['seniority']) + "_" + fullName + '_icon.png'
  let icon = `../images/${iconName}`
  let bgColor = data['polarity'] === 'yin' ? theme.colors[data['color']] : ''
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
      <img alt={fullName} css={css`background-color: ${bgColor};`} src={icon} width="900" />
      <table css={cardStyles}>
        <tbody>
          {cardInfo}
        </tbody>
      </table>
    </div>
  )
}

export default Card