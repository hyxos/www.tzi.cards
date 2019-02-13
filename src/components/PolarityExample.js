import React from 'react'
import WoodRat from '../../static/images/01_wood_rat_card.png'
import WoodOx from '../../static/images/02_wood_ox_card.png'
import { css } from '@emotion/core'

const ExampleStyles = css`
    table {
        border-collapse: collapse;
        border: 1px solid #d3d3d3;
    }
    th {
        border: 1px solid #a9a9a9;
        text-align: center;
        padding: 10px 20px;
    }
    caption {
        background: #d3d3d3;
        border: 15px solid #a9a9a9;
        padding: 10px 15px;
    }
    td, td:first-of-type {
        border: 1px solid #cecfd5;
        text-align: center;
        padding: 20px 20px;
    }
    img {
        margin-top: auto;
        margin-bottom: auto;
    }
`

const PolarityExample = () => (
    <div css={ExampleStyles}>
        <table>
            <caption>TZI Cards indicate their polarity through their background color</caption>
            <thead>
                <tr>
                    <th scope="col">
                        Yang
                    </th>
                    <th scope="col" css={css`color: white; background: black;`}>
                        Yin
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img alt="Wood Rat" src={WoodRat} /> 
                    </td>
                    <td css={css`background: black;`}>
                        <img alt="Wood Ox" src={WoodOx} />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default PolarityExample