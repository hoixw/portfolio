import './App.css'
import React from 'react';
import CursorTrail from './CursorTrail';
import Accordion from './Accordion';

function App() {
    return (
        <div className="App">
            <CursorTrail />
            <div className="title">Sachin Thakrar</div>
            <Accordion/>
        </div>
    );
}

export default App;
