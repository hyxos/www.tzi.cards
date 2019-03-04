import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const formatYears = (years) => 
    <tr key={years[0] + "-" + years[1]}>
      <td colSpan="1">{years[0]}</td><td colSpan="1" >{years[1]}</td>
    </tr>

const extractYears = (years) => years.map(formatYears)

const formatNiandai = (niandai) => {
  console.log(niandai)
  return (
    <React.Fragment>
      <tr key={niandai.node.seniority}>
        <td rowSpan={niandai.node.years.length + 1}>{niandai.node.seniority}</td>
      </tr>
      {extractYears(niandai.node.years)}
    </React.Fragment>
  )
}

const extractNiandai = (niandai) => niandai.map(formatNiandai)

export default () => (
  <StaticQuery
    query={graphql`
      query newYears {
        allDataJson (filter: {kind: {eq: "niandai"}}){
          edges {
            node {
            seniority
            years
            }
          }
        }
      }
    `}
    render={data => (
      <table>
        <tbody>
          {extractNiandai(data.allDataJson.edges)}
        </tbody>
      </table>
    )}
  />
)
