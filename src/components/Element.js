import React from 'react'
import { css } from '@emotion/core'
import theme from '../../config/theme'

const elementStyles = css`
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

const Element = ({data}) => {
    const elementColor = theme.colors[data.color]

    return (
        <div css={elementStyles}>
            <table>
                <caption css={css`background: ${elementColor};color: white;`}>The Aspects and Qualities of {data.name}</caption>
                <tbody>
                    <tr>
                        <td>
                            Order
                        </td>
                        <td>
                            {data.order}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Color
                        </td>
                        <td css={css`background-color: ${elementColor};color: white;`}>
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
}

export default Element