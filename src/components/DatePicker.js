import React from 'react'
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

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const optionMonths = months.map((month) =>
  <option key={month} value={month}>{month}</option>
)
export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new moment(),
      month: null,
      day: null,
      year: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({ 
      month: this.state.date.format('MMMM'),
      day: this.state.date.format('D'),
      year: this.state.date.format('YYYY')
    })
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div css={datePickerlStyles}>
        <div className="container">
          <form action="#">
            <span>
              <label htmlFor="month">Month</label>
              <select name="month" defaultValue={this.state.month} onChange={this.handleChange}>
                {optionMonths}
              </select>
            </span>
            <span>
              <label htmlFor="day">Day</label>
              <input name="day" type="text" defaultValue={this.state.day} onChange={this.handleChange}></input>
            </span>
            <span>
              <label htmlFor="year">Year</label>
              <input name="year" type="text" defaultValue={this.state.year} onChange={this.handleChange}></input>
            </span>
          </form>
        </div>
        <div className="container">
          <table>
            <tbody>
              <tr>
                <td>{this.state.month}</td>
                <td>{this.state.day}</td>
                <td>{this.state.year}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

