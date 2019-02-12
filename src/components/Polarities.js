import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { darken, lighten } from 'polished'

const YinButton = props => (
    <Link to={props.to} className="eb" css={css`
        background-color: black;
        border: 1px solid #d3d3d3;
        border-radius: 9px;
        color: white;
        width: 100px;
        margin: 5px 5px;
        padding: 10px 12px;
        text-align: center;
        &:hover {
            background-color: ${lighten(0.25, 'black')};
            color: ${darken(0.25, 'white')};
        }
    `}>
        {props.value}
    </Link>
)

const YangButton = props => (
    <Link to={props.to} className="eb" css={css`
        background-color: white;
        border: 1px solid #d3d3d3;
        border-radius: 9px;
        color: black;
        width: 100px;
        margin: 5px 5px;
        padding: 10px 12px;
        text-align: center;
        &:hover {
            background: ${darken(0.25, 'white')};
            color: ${lighten(0.25, 'black')};
        }
    `}>
        {props.value}
    </Link>
)

const Polarities = () => {
    
    return (
        <div>
            <div css={css`
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-content: space-around;
                        margin-bottom: 20px;
                    `
            }>
                <YangButton to="yang" color="white" value="yang" />
                <YinButton to="yin" color="black" value="yin" />
            </div>
        </div>
    )
}

export default Polarities