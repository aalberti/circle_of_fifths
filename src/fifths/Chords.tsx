import React, {FC} from "react";
import './Musicologist.css'
import Keyboard from "./keyboard/Keyboard";
import {Chord} from "./chords/MusicTheory";

interface ChordsProps {
    chordName: string
}

const Chords: FC<ChordsProps> = ({chordName}) => {
    return <div className="chords">
        <div className="chordName">{chordName}</div>
        <Keyboard notes={new Chord(chordName).notes()}/>
    </div>
}

export default Chords