import React, {FC} from "react";
import './Musicologist.css'
import Keyboard from "./keyboard/Keyboard";
import {Scale} from "./chords/MusicTheory";

interface ScaleBoxProps {
    chordName: string
}

const ScaleBox: FC<ScaleBoxProps> = ({chordName}) => {
    return <div className="chords">
        <div className="chordName">{chordName}</div>
        <div style={{display: "flex"}}>
            {new Scale(chordName).chords().map(
                chord => <Keyboard notes={chord.notes()}/>
            )}
        </div>
    </div>
}

export default ScaleBox