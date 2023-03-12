import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import {useEffect, useState} from "react";
import Square from "./Components/Square";

const borderStyle = {
    border: '4px solid black',

    margin: '0 auto',
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto auto',


}

function App() {
    const siteName = 'Tic-Tac-Toe Game';
    const [board, setBoard] = useState(Array(9).fill(null));
    const [gamerX, setGamerX] = useState(true);
    const [winner, setWinner] = useState(undefined);
    useEffect(() => {
calculateWinner()
    }, [board])

    const handelMove = (ind, element) => {

        if (element===null){
            const gamer = gamerX ? 'X' : '0';
        setBoard(board.map((el, i) => i === ind ? gamer : el))
        setGamerX(!gamerX)
    }
    }

    const calculateWinner = () => {
        const winningCombination = [
            [0, 4, 8],
            [2, 4, 6],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ]
        for (let i = 0; i < winningCombination.length; i++) {
            const [a, b, c] = winningCombination[i];
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                setWinner(`${board[a]} won!`)
            }
        }
    }

    return (
        <div className="App">
            <Header siteName={siteName}/>
            <div style={borderStyle}>
                {board.map((el, i) => (
                    <Square key={i} el={el} index={i}
                            handelMove={handelMove}/>
                ))}
            </div>
            <h2>{winner}</h2>
        </div>
    );
}

export default App;
