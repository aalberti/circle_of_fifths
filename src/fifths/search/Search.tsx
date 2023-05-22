import {useState} from "react";
import './Search.css'
import {Chord, chordsContaining, Note, scalesContaining} from "../theory/MusicTheory";
import {ChordDetail} from "../chord/ChordDetail";
import ScaleDetail from "../scale/ScaleDetail";
import {parseInput} from "./InputParser";

export function Search() {
    const [input, setInput] = useState<string>("")
    const parsedInput = () => parseInput(input);

    return <div className="search">
        <div className="searchInput">
            <label>
                choose notes
                <input onChange={e => setInput(e.target.value)}/>
            </label>
        </div>
        <div className="searchResults">
            {chords(parsedInput())}
            {scales(parsedInput())}
        </div>
    </div>
}

function chords(input: { notes: Note[]; chords: Chord[] }) {
    const chords = chordsContaining(input.notes).concat(input.chords);
    return chords && chords.length > 0 ? <div>
        chords:
        <div className="searchResultsList">
            {chords
                .map(chord =>
                    <ChordDetail chord={chord} key={chord.name}/>
                )}
        </div>
    </div> : <div/>;
}

function scales(input: { notes: Note[]; chords: Chord[] }) {
    const scales = scalesContaining(input.notes);
    return scales && scales.length > 0 ? <div>
        scales:
        <div className="searchResultsList">{scales
            .map(scale => <ScaleDetail
                scale={scale}
                filter={scale.chords().filter(chord => chord.containsAllNotes(input.notes))}
                key={scale.name}/>)}
        </div>
    </div> : <div/>;
}
