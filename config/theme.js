import { darken, lighten } from 'polished'
import { fonts } from '../src/lib/typography'

const brand = {
  primary: '#92140C',
  //primary: '#0078CC',
  //primary: '#5348FF',
  //primary: '#1ABC9C',
  //primary: '#D42210',
  //primary: '#D96E0E',
  //primary: '#9B59B6',
  //primary: '#6420E5',
  secondary: '#EFAA18',
  tertiary: '#53B236',
  gray: '#A397A2',
  blue: '#336699',
  blue_dark: `${darken(0.07, '#336699')}`,
  blue_light: `${lighten(0.50, '#336699')}`,

}

const colors = {
  primary_light: `${lighten(0.55, brand.primary)}`,
  primary_dark: `${darken(0.10, brand.primary)}`,
  secondary_light: `${lighten(0.25, brand.secondary)}`,
  tertiary_light: `${lighten(0.25, brand.tertiary)}`,
  tertiary_dark: `${darken(0.20, brand.tertiary)}`,
  gray: '#A397A2',
  black: '#000',
  white: '#fff',
  bg_color: '#fafafa',
  body_color: 'rgba(0,0,0,0.85)',
  link_color: brand.blue,
  link_color_hover: `${lighten(0.25, brand.blue)}`,
  red: '#92140C',
  yellow: '#EFAA18',
  blue: '#336699',
  blue_dark: `${darken(0.07, '#336699')}`,
  green: '#53B236',
}

const theme = {
  colors,
  fonts,
  brand,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
  transition: {
    ease: 'all 150ms ease',
  },
}

export default theme
