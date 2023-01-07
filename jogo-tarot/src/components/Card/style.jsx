import styled from "styled-components";
import bgTarotSimbol from "../../_assets/bg-tarot-simbols.jpg";

export const CardContent = styled.article`
    background-image: url(${bgTarotSimbol});
    display: flex;
    flex-direction: column;
    max-width: 186px;
    padding: 10px;
    border-radius: 12px;
    :hover {
        transform: rotateY(180deg);
    }
`;

export const Scene = styled.article`
    width: 200px;
    height: 440px;
    perspective: 600px;

    .is-flipped {
        transform: rotateY(180deg);
    }

    .card__face--front {
        background-image: url(${bgTarotSimbol});
        transform: rotateY(180deg);
        border-radius: 10px;
        text-align: center;

        img {
            width: 162px;
            display: block;
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
    height: 95%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
    :hover {
        transform: rotateY(180deg);
        box-shadow: 0 0 5px 0 white inset, 0 0 7px 7px black;
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
    background-image: url(${bgTarotSimbol});
`;
