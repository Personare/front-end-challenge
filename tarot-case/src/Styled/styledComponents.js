import styled from 'styled-components'

export const Tabuleiro = styled.div`
display: flex;
flex-wrap: wrap;
gap: 2%;
justify-content: center;
`
export const Cartas = styled.div`
display:grid;
margin: 5px;
background-color: white;
grid-template-rows: 1fr 5fr 1fr;
border-radius:20px;
justify-items: center;
`
