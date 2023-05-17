import React, {FC} from "react";
import './Musicologist.css'
import Keyboard from "./keyboard/Keyboard";
import {Scale} from "./theory/MusicTheory";

interface ScaleBoxProps {
    scaleName: string
}

const ScaleBox: FC<ScaleBoxProps> = ({scaleName}) => {
    const scale = new Scale(scaleName);
    return <div className="scaleBox">
        <div className="scaleDescriptor">
            <div className="scaleName">{scaleName}</div>
            <Keyboard notes={scale.notesOn2Octaves()}/>
        </div>
        <div className="chordsBox" style={{display: "flex"}}>
            {scale.chords().map(
                (chord, degree) => <div className="chordBox" key={chord.name}>
                    <div className="chordDescriptor">
                        <div>{chord.name}</div>
                        <hr className="chordDescriptorSeparator"/>
                        <div>{toRoman(degree)}</div>
                    </div>
                    <Keyboard notes={chord.notes()}/>
                </div>
            )}
        </div>
    </div>
}

const toRoman = (degree: number) => ["I", "II", "III", "IV", "V", "VI", "VII"][degree]

export default ScaleBox