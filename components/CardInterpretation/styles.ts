import styled from "styled-components"
import media from 'styled-media-query'

export const CardList = styled.article`
  display: flex;
  ${media.lessThan('large')`
    flex-direction: column;
    align-items:center;
    max-height:100vh;
    overflow:auto;
  `}
`
export const CardImage = styled.div`
  flex-basis: 20%;
  ${media.greaterThan('large')`
    align-self:center;
  `}
`
  export const CardDescription = styled.div`
  flex: 1;
  padding: 1.2rem;
`
export const CardTitle = styled.h2`
  color: #420026;
  
  ${media.lessThan('large')`
    text-align:center;
    margin-bottom: 3rem;
  `}
  ${media.greaterThan('large')`
    align-self:center;
    margin-bottom:.3rem;
  `}
`
export const CardInterpretation = styled.p`
  margin-bottom: .6rem;
  line-height: 2rem;
`
