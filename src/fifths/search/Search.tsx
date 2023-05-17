import {useState} from "react";
import './Search.css'
import {chordsContaining, Note, scalesContaining} from "../theory/MusicTheory";
import {ChordDetail} from "../chord/ChordDetail";

export function Search() {
    const [noteNames, setNoteNames] = useState<string>("")
    const notes = () => noteNames.split(" ")
        .map(name => new Note(name));

    return <div className="search">
        <div className="searchInput">
            <label>
                choose notes
                <input onChange={e => setNoteNames(e.target.value)}/>
            </label>
        </div>
        <div className="searchResults">
            {"chords:"}
            <div className="chordResults">
                {chordsContaining(notes())
                    .map(chord =>
                        <ChordDetail key={chord.name} chord={chord} degree=""/>
                    )}
            </div>
            <div>{`scales: ${scalesContaining(notes())
                .map(scale => scale.name)
                .join(", ")}`}
            </div>
        </div>
    </div>
}