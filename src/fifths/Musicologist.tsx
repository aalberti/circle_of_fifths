import React, {useState} from "react";
import Circle from "./Circle";
import './Musicologist.css'

export function Musicologist() {
    const [chord, setChord] = useState<string>("");
    return <>
        {chord}
        <Circle onChordSelected={setChord}/>
    </>;
}