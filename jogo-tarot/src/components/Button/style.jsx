import styled from "styled-components";
import bgTarotSimbol from "../../_assets/bg-tarot-simbols.jpg";

export const Button = styled.button`
    background-color: red;
    background-image: url(${bgTarotSimbol});
    background-position: center;
    background-size: cover;
    border: none;
    padding: 15px 25px;
    font-size: 25px;
    border-radius: 15px;
    color: #ffffff;
    font-family: "Berkshire Swash", cursive;
    :hover {
        box-shadow: 0 0 5px 0 white inset, 0 0 7px 7px black;
    }
`;
