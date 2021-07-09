import styled from 'styled-components'

export const Tabuleiro = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 5%;
gap: 2%;
justify-content: center;

`
export const Cartas = styled.div`
display:grid;
margin: 5px;
background-color: white;
grid-template-rows: 1fr 5fr 1fr;
border-radius:20px;
width:250px;
height: 55vh;
min-height: 500px;
justify-items: center;
&:hover{
    box-shadow: 0 0 10px #aaaaaa;
    transform: scale(1.02);
    
}
`
