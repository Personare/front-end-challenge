import styled from 'styled-components'

import v from './variables'
import media from './Media'

export const RootContent = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`

export const AppHeader = styled.section`
  flex: 0 0 120px;
  display: flex;
  flex-flow: column no-wrap;
  padding: 20px;
  color: ${v.foreColor};
  font-size: 1em;
  text-align: center;
  width:100%;
  max-width:800px;
  ${media.desktop`padding: 0 20px;`}
  ${media.tablet`padding: 0 5px;`}
`

export const ContentContainer = styled.section`
  flex: 1;
  width:100%;
  max-width:800px;
  position: relative;
`

export const AppFooter = styled.footer`
  font-size: 0.8em;
`

export const Title = styled.h1`
  flex: 1;
  color: ${v.foreColor};
  padding-left: 20px;
  font-size: 1.5em;
  text-align: initial;
`

export const ContentArea = styled.section`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
`

export const Grid = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px ${v.borderColor} solid;
`

export const HRow = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 35px;
  font-weight: bold;
`

export const Col = styled.div`
  padding: 2px;
`

export const Button = styled.button`
  border: 1px ${v.borderColor} solid;

`
