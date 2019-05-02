import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql, navigate } from "gatsby"
import { css } from '@emotion/core'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import theme from '../../config/theme'

const moment = extendMoment(Moment);

const lunarCalculatorlStyles = css`
.container {
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
span {
  display: inline-block;
  margin: 10px;
  padding; 10px;
}
input {
  width: 70px;
}
label {
  display: block;
}
`
const findNiandai = (date, nianling) => {
  let slug = ''
  for (let niandai of nianling) {
    let { element, animal, years } = niandai.node
    let match = false
    for (let range of years) {
      range = moment.range(range[0], range[1])
      if (range.contains(date)) {
        match = true
        break
      }
      else {
        continue
      }
    }
    if (match === true) {
      slug = element + "-" + animal
      break
    }
    else {
      slug = false
    }
  }
  return slug
}

function LunarCalculator() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const dd = (num) => {
    return (num < 10 ? '0' +  String(num) : num)
  }
  const cleanDate = (date) => {
    let year = date.getFullYear()
    let month = dd(date.getMonth() + 1)
    let day = date.getDate()
    return `${month}-${day}-${year}`
  }
  const rawDate = new Date()
  let cleanedDate = cleanDate(rawDate)
  const [date, setDate] = useState(moment(cleanedDate, "MM-DD-YYYY"))
  const [month, setMonth] = useState(date.format('MMMM'))
  const [day, setDay] = useState(date.format('D'))
  const [year, setYear] = useState(date.format('YYYY'))
  const [valid, setValid] = useState(true)
  const optionMonths = months.map((month) =>
    <option key={month} value={month}>{month}</option>
  )

  useEffect(() => {
    setDate(moment(`${month + " " + day + " " + year}`, 'MMMM DD YYYY'))
    setValid(true)
  }, [month, day, year])

  return (
    <StaticQuery
      query={graphql`
      query newYears {
        allDataJson (filter: {kind: {eq: "niandai"}}){
          edges {
            node {
            seniority
            element
            animal
            years
            }
          }
        }
      }
    `}
      render={data => (
        <div css={lunarCalculatorlStyles}>
          <div className="container">
            <form action="#" onSubmit={event => {
              event.preventDefault()
              const niandai = findNiandai(date, data.allDataJson.edges)
              niandai ? navigate(niandai) : setValid(false)
            }}>
              <span>
                <label htmlFor="month">Month</label>
                <select name="month" defaultValue={month} onChange={e => setMonth(e.target.value)}>
                  {optionMonths}
                </select>
              </span>
              <span>
                <label htmlFor="day">Day</label>
                <input name="day" type="text" defaultValue={day} onChange={e => setDay(e.target.value)}></input>
              </span>
              <span>
                <label htmlFor="year">Year</label>
                <input name="year" type="text" defaultValue={year} onChange={e => setYear(e.target.value)}></input>
              </span>
              <span>
                <input type="submit" className="button-blue" value="Go!" />
              </span>
            </form>
          </div>
          <div css={css`background: ${valid ? theme.colors.green : theme.colors.red};
                        color: ${valid ? "black" : "white"};
                        height: 40px;
                        margin: auto;
                        padding: 5px;
                        border: 1px solid white;
          `}>
            {valid ? 
              date.toString().substr(0, date.toString().length - 18) : 
              "Must be a date between 1900 and 2080"
            }
          </div>
        </div>
      )}
    />
  )
}

export default LunarCalculator