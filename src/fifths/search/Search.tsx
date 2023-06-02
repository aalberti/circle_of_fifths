import './Search.css'
import {Chord, chordsContaining, Note, scalesContaining} from "../theory/MusicTheory";
import {ChordDetail} from "../chord/ChordDetail";
import ScaleDetail from "../scale/ScaleDetail";
import {parseInput} from "./InputParser";
import {useAppDispatch, useAppSelector} from "../../store";
import {changeSearch, currentSearch} from "./searchReducer";

export function Search() {
    const dispatch = useAppDispatch()
    const search = useAppSelector(currentSearch)
    const parsedInput = () => parseInput(search);

    return <div className="search">
        <div className="searchInput">
            <label>
                choose notes
                <input value={search} onChange={e => {
                    dispatch(changeSearch(e.target.value))
                }}/>
            </label>
        </div>
        <div>
            {chords(parsedInput())}
            {scales(parsedInput())}
        </div>
    </div>
}

function chords(input: { notes: Note[]; chords: Chord[] }) {
    const chords = chordsContaining(input.notes).concat(input.chords);
    return chords && chords.length > 0 ? <div className="searchResults">
        <div className="searchResultTitle">
            chords
        </div>
        <div className="searchResultsList">
            {chords
                .map(chord =>
                    <ChordDetail chord={chord} key={chord.name}/>
                )}
        </div>
    </div> : <div/>;
}

function scales(input: { notes: Note[]; chords: Chord[] }) {
    const scales = scalesContaining(input.notes, input.chords);
    return scales && scales.length > 0
        ? <div className="searchResults">
            <div className="searchResultTitle">
                scales
            </div>
            <div className="searchResultsList">{scales
                .map(scale => <ScaleDetail
                    scale={scale}
                    filter={scale.chords().filter(chord => chord.containsAllNotes(input.notes)).concat(input.chords)}
                    key={scale.name}/>)}
            </div>
        </div>
        : <div/>;
}
