import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Space from '../../atoms/Space/Space';
import Cards from '../../organisms/Cards';
import MainHeader from '../../organisms/MainHeader';

const App = () => (
    <div className="App">
        <Space />
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <MainHeader />
            <Cards />
        </header>
    </div>
);

export default App;
