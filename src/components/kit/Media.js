import { css } from 'styled-components'

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

export default Object.keys(sizes).reduce((accumulator, label) => (
  { ...accumulator,
    [label]: (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  }
), {})
