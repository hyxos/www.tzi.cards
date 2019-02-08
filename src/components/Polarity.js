import React from 'react'
import { css } from '@emotion/core'

const Polarity = ({data}) => (
    <table>
        <thead>
            <tr>
                <th scope="col">Aspect</th>
                <th scope="col">Quality</th>
            </tr>
        </thead>
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
                    Number
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
                    {data.romanization}
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
        </tbody>
    </table>
    

)

export default Polarity