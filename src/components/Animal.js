import React from 'react'
import { css } from '@emotion/core'
import theme from '../../config/theme'

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

  
const Animal = ({data}) => {
    const animalInfo = Object.entries(data).map(([key,value])=>{
        return (
            <div key={key}>{key} : {value.toString()}</div>
        );
      })
    return (
        <div>
            {animalInfo}
        </div>
    )
}

export default Animal