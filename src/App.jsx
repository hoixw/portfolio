import './App.css'
import React from 'react';
import CursorTrail from './CursorTrail';

function App() {
    return (
        <div className="App">
            <div id="scroll-container">
                <CursorTrail />
                <div className="title">Sachin Thakrar</div>
                <ul className="list-container">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default App;
