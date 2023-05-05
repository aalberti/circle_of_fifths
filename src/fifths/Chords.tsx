import React, {FC} from "react";
import './Musicologist.css'
import Keyboard from "./keyboard/Keyboard";

interface ChordsProps {
    chordName: string
}

const Chords:FC<ChordsProps> = ({chordName}) => {
    return <div className="chords">
        {chordName}
        <Keyboard chordName={chordName}/>
    </div>
}

export default Chords