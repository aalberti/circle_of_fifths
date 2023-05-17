import React, {FC} from "react";
import './Scale.css'
import {Scale} from "../theory/MusicTheory";
import {ChordDetail} from "../chord/ChordDetail";
import {ScaleSummary} from "./ScaleSummary";

const ScaleDetail: FC<{ scale: Scale }> = ({scale}) => {
    return <div className="scaleBox">
        <ScaleSummary scale={scale}/>
        <div className="chordsBox" style={{display: "flex"}}>
            {scale.chords().map((chord, degree) =>
                <ChordDetail key={chord.name} chord={chord} degree={toRoman(degree)}/>
            )}
        </div>
    </div>
}

const toRoman = (degree: number) => ["I", "II", "III", "IV", "V", "VI", "VII"][degree]

export default ScaleDetail