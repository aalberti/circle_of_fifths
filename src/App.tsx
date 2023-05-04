import React, {useState} from 'react';
import './App.css';
import Circle from "./Circle";

function App() {
    const [chord, setChord] = useState<string>("");
    return (
        <div className="App">
            <header className="App-header">
                {chord}
                <Circle onChordSelected={chord => setChord(chord)}/>
            </header>
        </div>
    );
}

export default App;
