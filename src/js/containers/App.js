import React from 'react';
import MagicBtn from '../components/MagicBtn';
import CardList from './CardList';

const App = () => (
    <div className='l-main'>
        <div className='l-container h-all-center'>
            <header>
                <p className="primary-text">
                    Bem vindo! Clique em iniciar para começar
                </p>

                <MagicBtn text='Iniciar' />
            </header>

            <div className='l-content'>
                <CardList />
            </div>
        </div>
    </div>
);

export default App;
