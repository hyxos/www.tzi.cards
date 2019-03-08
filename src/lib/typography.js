import Typography from 'typography'
import '../fonts/fonts.css'
import stAnnesTheme from 'typography-theme-st-annes'

stAnnesTheme.baseFontSize = '18px'

export const fonts = {
  regular: 'Inter UI Regular',
  regularItalic: 'Inter UI Regular Italic',
  semibold: 'Inter UI Semibold',
  semiboldItalic: 'Inter UI Semibold Italic',
  bold: 'Inter UI Bold',
  boldItalic: 'Inter UI Bold Italic',
}

const typography = new Typography(stAnnesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
