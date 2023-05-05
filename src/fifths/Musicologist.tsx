import React, {useState} from "react";
import Circle from "./Circle";
import './Musicologist.css'
import Chords from "./Chords";

export function Musicologist() {
    const [chord, setChord] = useState<string>("");
    return <div className="musicologist">
        <Circle onChordSelected={setChord}/>
        <Chords chordName={chord}/>
    </div>
}