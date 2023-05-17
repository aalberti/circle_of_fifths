import {useState} from "react";
import './Search.css'
import {chordsContaining, Note, scalesContaining} from "../theory/MusicTheory";
import {ChordDetail} from "../chord/ChordDetail";
import ScaleDetail from "../scale/ScaleDetail";

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
            chords:
            <div className="searchResultsList">
                {chordsContaining(notes())
                    .map(chord =>
                        <ChordDetail chord={chord} key={chord.name}/>
                    )}
            </div>
            scales:
            <div className="searchResultsList">{scalesContaining(notes())
                .map(scale => <ScaleDetail
                    scale={scale}
                    filter={scale.chords().filter(chord => chord.containsAllNotes(notes()))}
                    key={scale.name}/>)}
            </div>
        </div>
    </div>
}