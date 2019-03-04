import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import Moment from 'moment'
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const datePickerlStyles = css`
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
  width: 80px;
  text-align: right;
}
label {
  display: block;
}
`

function DatePicker () {
  const [date, setDate] = useState(new moment())
  const [month, setMonth] = useState(date.format('MMMM'))
  const [day, setDay] = useState(date.format('D'))
  const [year, setYear] = useState(date.format('YYYY'))
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const optionMonths = months.map((month) =>
    <option key={month} value={month}>{month}</option>
  )

  useEffect(() => {
    setDate(moment(`${month + " " +  day + " " + year}`))
  })

  return (
    <div css={datePickerlStyles}>
      <div className="container">
        <form action="#">
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
        </form>
      </div>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td>{date.format("MMM Do YYYY")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DatePicker