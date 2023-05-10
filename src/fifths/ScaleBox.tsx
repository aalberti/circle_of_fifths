import React, {FC} from "react";
import './Musicologist.css'
import Keyboard from "./keyboard/Keyboard";
import {Chord} from "./chords/MusicTheory";

interface ScaleBoxProps {
    chordName: string
}

const ScaleBox: FC<ScaleBoxProps> = ({chordName}) => {
    return <div className="chords">
        <div className="chordName">{chordName}</div>
        <Keyboard notes={new Chord(chordName).notes()}/>
    </div>
}

export default ScaleBox