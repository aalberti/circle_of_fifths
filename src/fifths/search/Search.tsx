import {useState} from "react";
import {Note, scalesInFifthsOrder} from "../chords/MusicTheory";
import {isEqual} from "lodash";

function notes(noteNames: string) {
    return noteNames.split(" ")
        .map(name => new Note(name))
}

function scalesContaining(notes: Note[]) {
    return scalesInFifthsOrder()
        .filter(scale => scale.chords()
            .some(chord => chord.containsAllNotes(notes)));
}

function distinct<T>(array: T[]): T[] {
    const result: T[] = [];
    for (const item of array) {
        const found = result.some((value) => isEqual(value, item));
        if (!found) {
            result.push(item);
        }
    }
    return result;
}

function chordsContainingNotes(notes: Note[]) {
    const allChords = distinct(scalesInFifthsOrder()
        .flatMap(scale => scale.chords()));
    return allChords
        .filter(chord => chord.containsAllNotes(notes));
}

export function Search() {
    const [noteNames, setNoteNames] = useState<string>("")

    return <div className="search">
        <label style={{fontSize: "medium"}}>
            {"choose notes"}
            <input onChange={e => setNoteNames(e.target.value)}/>
        </label>
        <div className="searchResults">
            <div>{`notes: ${noteNames}`}</div>
            <div>{`chords: ${chordsContainingNotes(notes(noteNames))
                .map(chord => chord.name)
                .join(", ")}`}</div>
            <div>{`scales: ${scalesContaining(notes(noteNames))
                .map(scale => scale.name)
                .join(", ")}`}</div>
        </div>
    </div>
}