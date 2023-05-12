import React, {useState} from "react";
import Circle from "./circle/Circle";
import './Musicologist.css'
import ScaleBox from "./ScaleBox";

export function Musicologist() {
    const [chord, setChord] = useState<string>("");
    return <div className="musicologist">
        <Circle diameter={500} onChordSelected={setChord}/>
        <ScaleBox chordName={chord}/>
    </div>
}