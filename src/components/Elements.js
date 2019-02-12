import React from 'react'
import { css } from '@emotion/core'
import theme from '../../config/theme'
import { Link } from 'gatsby'
import { lighten } from 'polished'

const ElementButton = props => (
    <Link to={props.to} className="eb" css={css`
        background-color: ${lighten(0.25,theme.colors[props.color])};
        border: 1px solid #d3d3d3;
        border-radius: 9px;
        color: black;
        width: 100px;
        margin: 5px 5px;
        padding: 10px 12px;
        text-align: center;
        &:hover {
            background-color: ${theme.colors[props.color]};
            color: white;
        }
    `}>
        {props.value}
    </Link>
)

const Elements = () => {
    
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
                <ElementButton to="wood" color="green" value="wood" />
                <ElementButton to="fire" color="red" value="fire" />
                <ElementButton to="earth" color="yellow" value="earth" />
                <ElementButton to="metal" color="gray" value="metal" />
                <ElementButton to="water" color="blue" value="water" />                                                
            </div>
        </div>
    )
}

export default Elements