import React from "react";
import { useNavigate } from "react-router-dom"
import ImageCard from "../components/ImageCard";
import { BackgroundHome, ButtonHome, HomeStyle, LogoName } from "../styles/HomeStyle";


const Home = () => {
  const navigate = useNavigate()

  const game = () =>{
    navigate('/game')
  }


  return (
    <div>
      <BackgroundHome>
        <ImageCard/>
      </BackgroundHome>

    <HomeStyle>
      <LogoName>Tarot Game</LogoName>
      <ButtonHome onClick={game}>Start Game</ButtonHome>
    </HomeStyle>
      
      
    </div>
  );
};

export default Home;