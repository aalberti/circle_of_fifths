import {Chord, Note} from "../theory/MusicTheory";

function normalize(name: string) {
    const naturalNote = name.substring(0, 1)
    const modifier = name.substring(1)
    return naturalNote.toUpperCase() + modifier;
}

function isChordName(name: string) {
    return name.toLowerCase().includes("m");
}

function isNoteName(name: string) {
    return !isChordName(name);
}

export function parseInput(noteNames: string): { notes: Note[], chords: Chord[] } {
    const tokens = noteNames.split(" ")
        .map(normalize)
        .filter(name => name);
    return {
        notes: tokens
            .filter(isNoteName)
            .map(name => new Note(name)),
        chords: tokens
            .filter(isChordName)
            .map(name => new Chord(name))
    };
}