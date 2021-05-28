import React , {useState, useEffect}from 'react'
import './App.css'
import Square from './Square'
import { Pattern } from './Pattern'

function App() {
    const [board, setBoard] = useState(["","","","","","","","","",]);
    const [player, setPlayer] = useState("X");
    const [result, setResult] = useState({winner: "", state: "none"});

    useEffect(() => {
        checkWin();
        checkTie();
        if(player === "X"){
            setPlayer("O")
        }
        else{
            setPlayer("X")
        }
    }, [board]);


    useEffect(() => {
        if(result.state != "none"){
            alert( `Game Finished! Wining Player: ${result.winner} and State: ${result.state}`);
        }
    }, [result])



    const chooseSquare = (square) => {
        setBoard(board.map((value, index) => {
            if(index === square && value===""){
                return player
            }
            return value;
        }))

       
    }
    
    const checkWin  = () =>{
        Pattern.forEach((currentPattern) => {
            const firstPlayer = board[currentPattern[0]];
            if(firstPlayer === "") return;
            let winningPattern = true;
            currentPattern.forEach((index) => {
                if(board[index] !== firstPlayer){
                    winningPattern = false;
                }
            });

            if(winningPattern){
                setResult({ winner: player, state: "won"});
                setBoard(["","","","","","","","","",]);
            }
        })
    }

    const checkTie = () => {
         let filled = true;
         board.forEach((square) => {
             if(square === "")
             {
                 filled = false;
             }
         });

         if(filled){
             setResult({winner: "No One" , state: "Tie"});
             setBoard(["","","","","","","","","",]);
         }
    }
    return (
        <div className="App">
                <div className="board">
                    <div className="row">
                            <Square val = {board[0]} chooseSquare={ () => chooseSquare(0) } />
                            <Square val = {board[1]} chooseSquare={ () =>chooseSquare(1)}  />
                            <Square val = {board[2]} chooseSquare={ () => chooseSquare(2) }  />
                    </div>

                    <div className="row">
                                <Square val = {board[3]} chooseSquare={ () => chooseSquare(3) }  />
                                <Square val = {board[4]} chooseSquare={ () => chooseSquare(4) }  />
                                <Square val = {board[5]} chooseSquare={ () => chooseSquare(5) }  />
                    </div>

                    <div className="row">
                            <Square val = {board[6]} chooseSquare={ () => chooseSquare(6) }  />
                            <Square val = {board[7]} chooseSquare={ () => chooseSquare(7) }  />
                            <Square val = {board[8]} chooseSquare={ () => chooseSquare(8) }  />
                    </div>
                </div>
        </div>
    )
}

export default App
