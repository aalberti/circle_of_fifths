import React, {FC} from "react";
import './Musicologist.css'
import Keyboard from "./keyboard/Keyboard";
import {Scale} from "./chords/MusicTheory";

interface ScaleBoxProps {
    chordName: string
}

const ScaleBox: FC<ScaleBoxProps> = ({chordName}) => {
    return <div className="scaleBox">
        <div className="scaleName">{chordName}</div>
        <div className="chordsBox" style={{display: "flex"}}>
            {new Scale(chordName).chords().map(
                chord => <Keyboard name={chord.name} notes={chord.notes()}/>
            )}
        </div>
    </div>
}

export default ScaleBox