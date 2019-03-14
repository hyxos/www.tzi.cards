import React from 'react'
import TZIGrid from './TZIGrid'
import { navigate } from 'gatsby'
import { css } from '@emotion/core'

const animalLinkCss = css`
  &:hover {
    background-color: #eaeaea;
  }
`
// Import all of the files from the ../images/animals directory
const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("../images/animals/", false, /\.(png|jpe?g|svg)$/)
)
  
export default function AnimalGrid() {
  // Map images into image tags
  let imgTags = Object.keys(images).map(key => {  
    let linkRef = key.substring(0, key.length - 9)
    return (
      <img css={animalLinkCss} key={key} src={images[key]} onClick={() => navigate(linkRef)} />
  )})

  const animals = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "pig" ]
  const imgstr = (animal) => `${animal}_icon.png`
  const order = animals.map(imgstr)

  // Sort image tags in proper order before sending to TZIGrid
  imgTags = imgTags.sort(function(a,b) {
    return order.indexOf( a.key ) - order.indexOf( b.key )})

  return (
    <div>
      <TZIGrid data={imgTags}/>
    </div>
  )
}

