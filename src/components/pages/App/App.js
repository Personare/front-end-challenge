import React from 'react';
import './App.scss';
import Space from '../../atoms/Space/Space';
import Cards from '../../organisms/Cards';
import MainHeader from '../../organisms/MainHeader';

const App = () => (
    <div className="App">
        <Space />
        <main className="App-header">
            <MainHeader />
            <Cards />
        </main>
    </div>
);

export default App;
