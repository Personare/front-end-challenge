import styled from "styled-components";
import bgTarotSimbol from "../../_assets/bg-tarot-simbols.jpg";

export const Scene = styled.article`
    width: 12rem;
    height: 30rem;
    .is-flipped {
        transform: rotateY(185deg);
    }

    .card__face--front {
        background-image: url(${bgTarotSimbol});
        transform: rotateY(180deg);
        border-radius: 10px;
        text-align: center;

        img {
            width: 10rem;
            margin: auto;
        }
    }
    img {
        width: 100%;
        height: 100%;
    }
`;
export const CardContainer = styled.div`
    width: 100%;
    height: 97%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
    &:hover {
        transform: rotateY(180deg);
        box-shadow: 0 0 10px 0 white inset, 0 0 7px 7px black;
    }
`;

export const CardFace = styled.div`
    position: absolute;
    width: 100%;
    backface-visibility: hidden;
`;

export const CardDescription = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
`;
