import styled from "styled-components";
import bgTarotSimbol from "../_assets/bg-tarot-simbols.jpg"

export const CardContent = styled.article`
  background-image: url(${bgTarotSimbol});
  display: flex;
  flex-direction: column;
  max-width: 186px;
  padding: 10px;
  border-radius: 12px;
`

export const InsideContainer = styled.div`
  border: 2px solid #000;

  img {
    width: 162px;
    display: block;
    margin: auto;
  }

  .card-info {
    border: 1px solid #000;
    padding: 10px;
    background-color: #FFFFFF ;

    .card-name {
      margin-bottom: 5px;
      font-weight: bold;
    }

    hr {
      border-color: #000;
    }

    .card-description {
      margin-top: 5px;
    }
  }
`