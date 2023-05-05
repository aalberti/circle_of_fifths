import keyboard from "./keyboard_double_octave.png";
import React, {FC} from "react";
import "./Keyboard.css"

interface KeyboardProps {
    chordName:string
}

const Keyboard:FC<KeyboardProps> = ({chordName}) => {
    return <img className="keyboard" src={keyboard} alt={`${chordName} on keyboard`}></img>;
};

export default Keyboard