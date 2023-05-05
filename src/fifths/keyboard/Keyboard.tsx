import keyboard from "./keyboard_double_octave.png";
import React, {FC} from "react";
import "./Keyboard.css"

interface KeyboardProps {
    chordName: string
}

const Keyboard: FC<KeyboardProps> = ({chordName}) => {
    /* White key x positions in pixels: 12 33 55 76 97 119 140 162 183 205 226 247 269 290 */
    return <div style={{position:"relative"}}>
        <img className="keyboard" src={keyboard} alt={`${chordName} on keyboard`}/>
        <div style={{transform:"translate(-50%, -50%)", position: "absolute", top: "90px", left: "12px", width: "10px", height: "10px", background:"blue", borderRadius:"50%"}}/>
        <div style={{transform:"translate(-50%, -50%)", position: "absolute", top: "90px", left: "33px", width: "10px", height: "10px", background:"blue", borderRadius:"50%"}}/>
        <div style={{transform:"translate(-50%, -50%)", position: "absolute", top: "90px", left: "119px", width: "10px", height: "10px", background:"blue", borderRadius:"50%"}}/>
        <div style={{transform:"translate(-50%, -50%)", position: "absolute", top: "90px", left: "290px", width: "10px", height: "10px", background:"blue", borderRadius:"50%"}}/>
    </div>;
};

export default Keyboard