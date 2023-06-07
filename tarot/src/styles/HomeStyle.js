import styled from "styled-components";


export const BackgroundHome = styled.div`
    background-color: black;
    width: 100%;
    z-index: -10;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
`

export const HomeStyle = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
`


export const LogoName = styled.h1`
    color:  rgb(22, 250, 34);
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 80px;
    letter-spacing: 4px;
    word-spacing: 2.4px;
    font-weight: 700;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: italic;
    font-variant: normal;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;
    -webkit-animation: scale-up-center 1.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite both;
	        animation: scale-up-center 1.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite both;

            @-webkit-keyframes scale-up-center {
                    0% {
                        -webkit-transform: scale(0.5);
                                transform: scale(0.5);
                    }
                    100% {
                        -webkit-transform: scale(1);
                                transform: scale(1);
                    }
                    }
                    @keyframes scale-up-center {
                    0% {
                        -webkit-transform: scale(0.5);
                                transform: scale(0.5);
                    }
                    100% {
                        -webkit-transform: scale(1);
                                transform: scale(1);
                    }
                    }

`
 
export const ButtonHome = styled.button`
    box-shadow:inset 0px 1px 0px 0px #d9fbbe;
	background:linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%);
	background-color:#b8e356;
	border-radius:50px;
	border:1px solid #83c41a;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:26px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #86ae47;

    :hover {
	background:linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
	background-color:#a5cc52;
    }
    :active {
	position:relative;
	top:1px;
    }
`
