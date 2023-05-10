import React, {useState} from "react";
import Circle from "./circle/Circle";
import './Musicologist.css'
import ScaleBox from "./ScaleBox";

export function Musicologist() {
    const [chord, setChord] = useState<string>("");
    return <div className="musicologist">
        <Circle onChordSelected={setChord}/>
        <ScaleBox chordName={chord}/>
    </div>
}