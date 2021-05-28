import React from 'react'
import './App.css'
import Square from './Square'

function App() {
    return (
        <div className="App">
                <div className="board">
                    <div className="row">
                            <Square />
                            <Square />
                            <Square />
                    </div>

                    <div className="row">
                            <Square />
                            <Square />
                            <Square />
                    </div>

                    <div className="row">
                            <Square />
                            <Square />
                            <Square />
                    </div>
                </div>
        </div>
    )
}

export default App
