
import './App.css';
import {GlobalState} from './Globais/GlobalState';
import { Router } from './Router/router';

function App() {
    return (
        <GlobalState>
            <Router />
        </GlobalState>
    );
}

export default App;
