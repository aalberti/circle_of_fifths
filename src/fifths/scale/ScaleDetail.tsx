import React, {FC} from "react";
import './ScaleDetail.css'
import Keyboard from "../keyboard/Keyboard";
import {Scale} from "../theory/MusicTheory";
import {ChordDetail} from "../chord/ChordDetail";

const ScaleDetail: FC<{ scaleName: string }> = ({scaleName}) => {
    const scale = new Scale(scaleName);
    return <div className="scaleBox">
        <div className="scaleDescriptor">
            <div className="scaleName">{scaleName}</div>
            <Keyboard notes={scale.notesOn2Octaves()}/>
        </div>
        <div className="chordsBox" style={{display: "flex"}}>
            {scale.chords().map((chord, degree) =>
                <ChordDetail key={chord.name} chord={chord} degree={toRoman(degree)}/>
            )}
        </div>
    </div>
}

const toRoman = (degree: number) => ["I", "II", "III", "IV", "V", "VI", "VII"][degree]

export default ScaleDetail