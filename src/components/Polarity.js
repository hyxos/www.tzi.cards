import React from 'react'
import { css } from '@emotion/core'

const polarityStyles = css`
    table {
        border-collapse: collapse;
        border: 1px solid #d3d3d3;
    }
    caption {
        background: #d3d3d3;
        border: 15px solid #a9a9a9;
        padding: 10px 15px;
    }
    td, td:first-of-type {
        border: 1px solid #cecfd5;
        padding: 10px 15px;
        margin: 10px;
    }  
`

const Polarity = ({data}) => (
    <div css={polarityStyles}>
        <table>
            <caption>The Aspects and Qualities of {data.name}</caption>
            <tbody>
                <tr>
                    <td>
                        Polarity
                    </td>
                    <td>
                        {data.polarity}
                    </td>
                </tr>
                <tr>
                    <td>
                        Binary Number
                    </td>
                    <td>
                        {data.number}
                    </td>
                </tr>
                <tr>
                    <td>
                        Color
                    </td>
                    <td>
                        {data.color}
                    </td>
                </tr>
                <tr>
                    <td>
                        Romanization
                    </td>
                    <td>
                        {data.name}
                    </td>
                </tr>
                <tr>
                    <td>
                        Pinyin
                    </td>
                    <td>
                        {data.pinyin}
                    </td>
                </tr>
                <tr>
                    <td>
                        Chinese
                    </td>
                    <td>
                        {data.chinese}
                    </td>
                </tr>
                <tr>
                    <td>
                        Celestial Body
                    </td>
                    <td>
                        {data.planet}
                    </td>
                </tr>
                <tr>
                    <td>
                        Astro Glyph
                    </td>
                    <td>
                        {data.astro}
                    </td>
                </tr>  
            </tbody>
        </table>
    </div>

)

export default Polarity