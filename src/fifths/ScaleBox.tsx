import React, {FC} from "react";
import './Musicologist.css'
import Keyboard from "./keyboard/Keyboard";
import {Scale} from "./chords/MusicTheory";

interface ScaleBoxProps {
    scaleName: string
}

const ScaleBox: FC<ScaleBoxProps> = ({scaleName}) => {
    return <div className="scaleBox">
        <div className="scaleName">{scaleName}</div>
        <div className="chordsBox" style={{display: "flex"}}>
            {new Scale(scaleName).chords().map(
                chord => <Keyboard key={chord.name} name={chord.name} notes={chord.notes()}/>
            )}
        </div>
    </div>
}

export default ScaleBox