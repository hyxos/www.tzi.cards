import React from 'react'
import { StaticQuery, graphql, navigate } from "gatsby"
import Moment from 'moment'
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const findNiandai = (date, nianling) => {
  let slug = ''
  for (let niandai of nianling) {
    let { element, animal, years } = niandai.node
    let match = false
    for ( let range of years) {
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
      
      continue
    }
  } 
  return slug
}

export default (props) => (
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
      <form onSubmit={event => {
        event.preventDefault()
  
        // TODO: do something with form values
        navigate(findNiandai(props.date, data.allDataJson.edges))
      }}>
        <input type="submit" value="go"/>
      </form>
    )}  
  />
)
