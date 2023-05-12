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
                (chord, degree) => <div className="chordBox">
                    <div className="chordDescriptor">
                        <div>{chord.name}</div>
                        <hr className="chordDescriptorSeparator"/>
                        <div>{toRoman(degree)}</div>
                    </div>
                    <Keyboard key={chord.name} notes={chord.notes()}/>
                </div>
            )}
        </div>
    </div>
}

const toRoman = (degree: number) => ["I", "II", "III", "IV", "V", "VI", "VII"][degree]

export default ScaleBox