import React, {FC} from "react";
import './Scale.css'
import {Chord, Scale} from "../theory/MusicTheory";
import {ChordDetail} from "../chord/ChordDetail";
import {ScaleSummary} from "./ScaleSummary";

const ScaleDetail: FC<{ scale: Scale, filter?: Chord[] }> = ({scale, filter}) => {
    return <div className="scaleBox">
        <ScaleSummary scale={scale}/>
        <div className="chordsBox">
            {scale.chords()
                .map((chord, degree) => ({chord: chord, degree: degree}))
                .filter(chord => !filter || filter.map(c => c.name).includes(chord.chord.name))
                .map(chord =>
                    <ChordDetail key={chord.chord.name} chord={chord.chord} degree={toRoman(chord.degree)}/>
                )}
        </div>
    </div>
}

const toRoman = (degree: number) => ["I", "II", "III", "IV", "V", "VI", "VII"][degree]

export default ScaleDetail