import {useState} from "react";
import './Search.css'
import {chordsContaining, Note, scalesContaining} from "../theory/MusicTheory";
import {ChordDetail} from "../chord/ChordDetail";
import {ScaleSummary} from "../scale/ScaleSummary";

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
                .map(scale => <ScaleSummary scale={scale} key={scale.name}/>)}
            </div>
        </div>
    </div>
}