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
                .filter(chord => !filter || filter.map(c => c.name).includes(chord.name))
                .map((chord, degree) =>
                    <ChordDetail key={chord.name} chord={chord} degree={toRoman(degree)}/>
                )}
        </div>
    </div>
}

const toRoman = (degree: number) => ["I", "II", "III", "IV", "V", "VI", "VII"][degree]

export default ScaleDetail