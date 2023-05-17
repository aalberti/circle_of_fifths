import {useState} from "react";
import {chordsContaining, Note, scalesContaining} from "../chords/MusicTheory";

export function Search() {
    const [noteNames, setNoteNames] = useState<string>("")
    const notes = () => noteNames.split(" ")
        .map(name => new Note(name));

    return <div className="search">
        <label style={{fontSize: "medium"}}>
            {"choose notes"}
            <input onChange={e => setNoteNames(e.target.value)}/>
        </label>
        <div className="searchResults">
            <div>{`notes: ${noteNames}`}</div>
            <div>{`chords: ${chordsContaining(notes())
                .map(chord => chord.name)
                .join(", ")}`}</div>
            <div>{`scales: ${scalesContaining(notes())
                .map(scale => scale.name)
                .join(", ")}`}</div>
        </div>
    </div>
}