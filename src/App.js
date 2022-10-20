import Board from './components/Board/Board';
import Info from './components/Info/Info';

import './App.css'
import { useState } from 'react';

const App = () => {
    const [winner, setWinner] = useState('');
    const [reset, setReset] = useState(false);

    const resetBoard = () => {
        setReset(true);
    }
    return (<div className = "App"> 
        {}
        <div className={`winner ${winner === '' ? 'shrink' : ''}`}>
                <div className='winner-text'>{winner}</div>
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
            <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            <Board reset={reset} setReset={setReset} winner={winner} 
                setWinner={setWinner} />
            <Info />
    </div>)
}

export default App;