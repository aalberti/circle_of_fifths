import keyboard from "./keyboard_double_octave.png";
import React, {FC} from "react";
import "./Keyboard.css"
import KeyboardPositions from "./KeyboardPositions";

interface KeyboardProps {
    chordName: string
}

const Keyboard: FC<KeyboardProps> = ({chordName}) => {
    const keys = [
        {key: "C", octave: 0},
        {key: "D", octave: 0},
        {key: "E", octave: 0},
        {key: "F", octave: 0},
        {key: "G", octave: 0},
        {key: "A", octave: 0},
        {key: "B", octave: 0},
        {key: "C", octave: 1},
        {key: "D", octave: 1},
        {key: "E", octave: 1},
        {key: "F", octave: 1},
        {key: "G", octave: 1},
        {key: "A", octave: 1},
        {key: "B", octave: 1},
    ]
    const positions = new KeyboardPositions(300, 100);
    return <div style={{position: "relative"}}>
        <img className="keyboard" src={keyboard} alt={`${chordName} on keyboard`}/>
        {keys
            .map(({key, octave}) => positions.keyPosition(key, octave))
            .map(({x, y}) => <div style={{
                transform: "translate(-50%, -50%)",
                position: "absolute",
                top: `${y}px`,
                left: `${x}px`,
                width: "10px",
                height: "10px",
                background: "blue",
                borderRadius: "50%"
            }}/>)
        }
    </div>;
};

export default Keyboard