import React from 'react'
import { css } from '@emotion/core'
import theme from '../../config/theme'
import DD from '../scripts/dd'

const animalStyles = css`
    table {
        border-collapse: collapse;
        border: 1px solid #d3d3d3;
    }
    caption {
        border: 15px solid #757d75;
        padding: 10px 15px;
    }
    td, td:first-child {
        border: 1px solid #cecfd5;
        padding: 10px 15px;
        margin: 10px;
    }  
`

const hasElement = (data) => {
    return (data['element'] ? data['element'] : null)
}

const Animal = ({data}) => {
    console.log(hasElement(data))
    let dd = new DD
    let iconName = (hasElement(data) ? dd.dd(data['order']) + "_" + data['element'] + "_" + data['animal'] + '_icon.png' :
    dd.dd(data['order']) + "_" + data['animal'] + '_icon.png')
    let icon = `../images/${iconName}`
    const animalInfo = Object.entries(data).map(([key,value])=>{
        return (
            <tr key={key}>
                <td>{key}</td>
                <td>{value.toString()}</td>
            </tr>
        );
      })
    return (
        <div>
            <img src={icon} width="900"/>
            <table css={animalStyles}>
                <tbody>
                    {animalInfo}
                </tbody>
            </table>
        </div>
    )
}

export default Animal