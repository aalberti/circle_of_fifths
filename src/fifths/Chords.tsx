import React, {FC} from "react";
import './Musicologist.css'
import keyboard from './keyboard_double_octave.png';

interface ChordsProps {
    chordName: string
}

const Chords:FC<ChordsProps> = ({chordName}) => {
    return <div className="chords">
        {chordName}
        <img className="keyboard" src={keyboard}></img>
    </div>
}

export default Chords