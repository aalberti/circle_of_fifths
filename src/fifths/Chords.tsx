import React, {FC} from "react";
import './Musicologist.css'
import Keyboard from "./keyboard/Keyboard";

interface ChordsProps {
    chordName: string
}

const Chords: FC<ChordsProps> = ({chordName}) => {
    const keys = [
        "C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B",
        "C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B",
    ]
    return <div className="chords">
        <div className="chordName">{chordName}</div>
        <Keyboard notes={keys}/>
    </div>
}

export default Chords