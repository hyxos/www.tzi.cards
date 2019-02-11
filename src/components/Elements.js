import React from 'react'
import { css } from '@emotion/core'
import theme from '../../config/theme'
import { Link } from 'gatsby'

const elementsStyles = css`
    table {
        border-collapse: collapse;
        border: 1px solid #d3d3d3;
    }
    caption {
        background: #d3d3d3;
        border: 15px solid #757d75;
        padding: 10px 15px;
    }
    td, td:first-child {
        text-align: center; 
        border: 1px solid #cecfd5;
        padding: 10px 15px;
        margin: 10px;
    }
    td a {
        color: white;
    }
    }
    button {
        border: 1px solid #cecfd5;
        border: none;
        width: 80px;
        :hover {
            background: #fce3c0
        }
    }
`

const Elements = ({data}) => {
    
    return (
        <div css={elementsStyles}>
            <table>
                <caption>The Five Elements</caption>
                <tbody>
                    <tr>
                        <td>
                            <button  css={css`background: ${theme.colors.green};`}>
                            <Link className="button" to="wood">Wood</Link>
                            </button>
                        </td>
                        <td>
                            <button css={css`background: ${theme.colors.red};`}>
                                <Link to="fire">Fire</Link>
                            </button>
                        </td>
                        <td>
                            <button css={css`background: ${theme.colors.yellow};`}>
                                <Link to="earth">Earth</Link>
                            </button>
                        </td>
                        <td>
                            <button css={css`background: ${theme.colors.gray};`}>
                                <Link to="metal">Metal</Link>
                            </button>
                        </td>
                        <td>
                            <button css={css`background: ${theme.colors.blue};`}>
                                <Link to="water">Water</Link>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Elements