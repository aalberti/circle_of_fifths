import React, {FC} from "react";
import './Scale.css'
import {Scale} from "../theory/MusicTheory";
import Keyboard from "../keyboard/Keyboard";

export const ScaleSummary: FC<{ scale: Scale }> = ({scale}) =>
    <div className="scaleDescriptor">
        <div className="scaleName">{scale.name}</div>
        <Keyboard chromas={scale.notesOn2Octaves()}/>
    </div>;