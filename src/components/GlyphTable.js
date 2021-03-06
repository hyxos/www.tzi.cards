import React from 'react'
import { css } from '@emotion/core'
import { navigate } from 'gatsby'
import theme from '../../config/theme'

const glyphStyles = css`
  div {
    text-align: center;
    margin: 10px 10px;
  }
  div > table {
    text-align: center;
    border-collapse: collapse;
    border: 1px solid #d3d3d3;
  }
  caption {
    padding: 10px 15px;
  }
  td, td:first-of-type {
    border: 1px solid #cecfd5;
    padding: 10px 15px;
    margin: 10px;
  }
  .tablelink {
    &:hover {
      background-color: ${theme.brand.blue_light};
    }
  }
  .captitle {
    font-size: 50px;
    margin-bottom: 40px;
  }
  .link {
    color:  ${theme.brand.blue};
    &:hover {
      color: ${theme.colors.link_color_hover}
    }
  }
`

const formatNiandai = (niandai) => {
  let begins = niandai[0]
  let ends = niandai[1]
  return (
    <tr key={begins + "-" + ends}>
      <td colSpan="2">{begins}</td><td colSpan="2" >{ends}</td>
    </tr>
  )
}

const extractYears = (years) => {
  return (
    years.map(formatNiandai)
  )
}

const GlyphTable = ({ data }) => {
  return (
    <div css={glyphStyles}>
      <table>
        <caption>
          <div className="captitle">{data.latin}</div>
        </caption>
        <tbody>
          <tr>
            <td colSpan="1">Order</td>
            <td colSpan="4">{data.order}</td>
          </tr>
          <tr>
            <td colSpan="1" className="tablelink" onClick={() => navigate('glyphs')}>Glyph</td>
            <td colSpan="4" className="tablelink" onClick={() => navigate(`glyphs/${data.latin}`)}>{data.latin}</td>
          </tr>
          <tr>
            <td className="tablelink" colSpan="1" onClick={() => navigate('animals')}>Animal</td>
            <td colSpan="2" className="tablelink" onClick={() => navigate(data.animal)}>{data.animal}</td>
            <td colSpan="1" className="tablelink" onClick={() => navigate(data.animal)}>{data.animal_chinese}</td>
            <td colSpan="1" className="tablelink" onClick={() => navigate(data.animal)}>{data.animal_pinyin}</td>
          </tr>
          <tr>
            <td className="tablelink" colSpan="1" onClick={() => navigate('earthly-branches')}>Earthly Branch</td>
            <td colSpan="2" className="tablelink" onClick={() => navigate(data.latin)} >{data.earthly_branch_meaning}</td>
            <td colSpan="1" className="tablelink" onClick={() => navigate(data.latin)}>{data.earthly_branch_chinese}</td>
            <td colSpan="1" className="tablelink" onClick={() => navigate(data.latin)}>{data.earthly_branch_pinyin}</td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan={data.years.length + 1}>Years</td>
            <td colSpan="2">Begins</td>
            <td colSpan="2">Ends</td>
          </tr>
          {extractYears(data.years)}
        </tbody>
      </table>
    </div>
  )
}

export default GlyphTable