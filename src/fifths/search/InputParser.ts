import {Chord, Chroma} from "../theory/MusicTheory";

function normalize(name: string) {
    const naturalChroma = name.substring(0, 1)
    const modifier = name.substring(1)
    return naturalChroma.toUpperCase() + modifier;
}

function isChordName(name: string) {
    return name.toLowerCase().includes("m");
}

function isChromaName(name: string) {
    return !isChordName(name);
}

export function parseInput(input: string): { chromas: Chroma[], chords: Chord[] } {
    const tokens = input.split(" ")
        .map(normalize)
        .filter(name => name);
    return {
        chromas: tokens
            .filter(isChromaName)
            .map(name => new Chroma(name)),
        chords: tokens
            .filter(isChordName)
            .map(name => new Chord(name))
    };
}