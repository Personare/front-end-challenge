import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/TarotHome';
import Game from '../pages/TarotGame';



function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/game' element= {<Game/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
