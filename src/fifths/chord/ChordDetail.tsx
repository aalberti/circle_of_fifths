import {Chord} from "../theory/MusicTheory";
import Keyboard from "../keyboard/Keyboard";
import './ChordDetail.css'
import React, {FC} from "react";

export const ChordDetail: FC<{ chord: Chord; degree: string; }> = ({chord, degree}) =>
    <div className="chordBox">
        <div className="chordDescriptor">
            <div>{chord.name}</div>
            {degree ?
                <div>
                    <hr className="chordDescriptorSeparator"/>
                    <div>{degree}</div>
                </div>
                : ""}
        </div>
        <Keyboard notes={chord.notes()}/>
    </div>;