import keyboard from "./keyboard_double_octave.png";
import React, {FC, useRef} from "react";
import "./Keyboard.css"
import KeyboardPositions from "./KeyboardPositions";

interface KeyboardProps {
    chordName: string
}

const Keyboard: FC<KeyboardProps> = ({chordName}) => {
    const imageRef = useRef<HTMLImageElement>(null)
    const keys = [
        {key: "C", octave: 0},
        {key: "Db", octave: 0},
        {key: "D", octave: 0},
        {key: "Eb", octave: 0},
        {key: "E", octave: 0},
        {key: "F", octave: 0},
        {key: "F#", octave: 0},
        {key: "G", octave: 0},
        {key: "Ab", octave: 0},
        {key: "A", octave: 0},
        {key: "Bb", octave: 0},
        {key: "B", octave: 0},
        {key: "C", octave: 1},
        {key: "Db", octave: 1},
        {key: "D", octave: 1},
        {key: "Eb", octave: 1},
        {key: "E", octave: 1},
        {key: "F", octave: 1},
        {key: "F#", octave: 1},
        {key: "G", octave: 1},
        {key: "Ab", octave: 1},
        {key: "A", octave: 1},
        {key: "Bb", octave: 1},
        {key: "B", octave: 1},
    ]
    const width = imageRef.current == null ? 300 : imageRef.current.clientWidth
    const height = imageRef.current == null ? 100 : imageRef.current.clientHeight
    const positions = new KeyboardPositions(width, height);
    return <div style={{position: "relative"}}>
        <img ref={imageRef} className="keyboardImage" src={keyboard} alt={`${chordName} on keyboard`}/>
        {keys
            .map(({key, octave}) => positions.keyPosition(key, octave))
            .map(({x, y}) => <div className="keyPressed" style={{
                transform: "translate(-50%, -50%)",
                position: "absolute",
                top: `${y}px`,
                left: `${x}px`,
            }}/>)
        }
    </div>;
};

export default Keyboard