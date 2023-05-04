import React, {useState} from "react";
import Circle from "./Circle";
import './Musicologist.css'

export function Musicologist() {
    const [chord, setChord] = useState<string>("");
    return <div className="musicologist">
        <Circle onChordSelected={setChord}/>
        {chord}
    </div>;
}