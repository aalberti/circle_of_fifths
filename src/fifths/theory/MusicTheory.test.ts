import {
    Chord,
    chordsContaining,
    Chroma,
    Scale,
    scalesContaining,
    scalesInFifthsOrder,
    sortInOctave
} from "./MusicTheory";
import {isEqual} from "lodash";

test.each([
    ["CM", ["C", "E", "G"]],
    ["C#M", ["C#", "F", "Ab"]],
    ["DM", ["D", "F#", "A"]],
    ["EbM", ["Eb", "G", "Bb"]],
    ["EM", ["E", "Ab", "B"]],
    ["FM", ["F", "A", "C"]],
    ["F#M", ["F#", "Bb", "C#"]],
    ["GM", ["G", "B", "D"]],
    ["AbM", ["Ab", "C", "Eb"]],
    ["AM", ["A", "C#", "E"]],
    ["BM", ["B", "Eb", "F#"]],
    ["BbM", ["Bb", "D", "F"]],
    ["Cm", ["C", "Eb", "G"]],
    ["C#m", ["C#", "E", "Ab"]],
    ["Dm", ["D", "F", "A"]],
    ["Ebm", ["Eb", "F#", "Bb"]],
    ["Em", ["E", "G", "B"]],
    ["Fm", ["F", "Ab", "C"]],
    ["F#m", ["F#", "A", "C#"]],
    ["Gm", ["G", "Bb", "D"]],
    ["Abm", ["Ab", "B", "Eb"]],
    ["Am", ["A", "C", "E"]],
    ["Bbm", ["Bb", "C#", "F"]],
    ["Bm", ["B", "D", "F#"]],
    ["Cdim", ["C", "Eb", "F#"]],
    ["C#dim", ["C#", "E", "G"]],
    ["Ddim", ["D", "F", "Ab"]],
    ["Ebdim", ["Eb", "F#", "A"]],
    ["Edim", ["E", "G", "Bb"]],
    ["Fdim", ["F", "Ab", "B"]],
    ["F#dim", ["F#", "A", "C"]],
    ["Gdim", ["G", "Bb", "C#"]],
    ["Abdim", ["Ab", "B", "D"]],
    ["Adim", ["A", "C", "Eb"]],
    ["Bbdim", ["Bb", "C#", "E"]],
    ["Bdim", ["B", "D", "F"]],
])("Chord %s is made up of %s", (chordName, chromaNames) => {
    expect(new Chord(chordName).chromas()).toEqual(chromas(...chromaNames))
})

test.each([
    ["CM", ["CM", "Dm", "Em", "FM", "GM", "Am", "Bdim"]],
    ["C#M", ["C#M", "Ebm", "Fm", "F#M", "AbM", "Bbm", "Cdim"]],
    ["DM", ["DM", "Em", "F#m", "GM", "AM", "Bm", "C#dim"]],
    ["EbM", ["EbM", "Fm", "Gm", "AbM", "BbM", "Cm", "Ddim"]],
    ["EM", ["EM", "F#m", "Abm", "AM", "BM", "C#m", "Ebdim"]],
    ["FM", ["FM", "Gm", "Am", "BbM", "CM", "Dm", "Edim"]],
    ["F#M", ["F#M", "Abm", "Bbm", "BM", "C#M", "Ebm", "Fdim"]],
    ["GM", ["GM", "Am", "Bm", "CM", "DM", "Em", "F#dim"]],
    ["AbM", ["AbM", "Bbm", "Cm", "C#M", "EbM", "Fm", "Gdim"]],
    ["AM", ["AM", "Bm", "C#m", "DM", "EM", "F#m", "Abdim"]],
    ["BbM", ["BbM", "Cm", "Dm", "EbM", "FM", "Gm", "Adim"]],
    ["BM", ["BM", "C#m", "Ebm", "EM", "F#M", "Abm", "Bbdim"]],
    ["Cm", ["Cm", "Ddim", "EbM", "Fm", "Gm", "AbM", "BbM"]],
    ["C#m", ["C#m", "Ebdim", "EM", "F#m", "Abm", "AM", "BM"]],
    ["Dm", ["Dm", "Edim", "FM", "Gm", "Am", "BbM", "CM"]],
    ["Ebm", ["Ebm", "Fdim", "F#M", "Abm", "Bbm", "BM", "C#M"]],
    ["Em", ["Em", "F#dim", "GM", "Am", "Bm", "CM", "DM"]],
    ["Fm", ["Fm", "Gdim", "AbM", "Bbm", "Cm", "C#M", "EbM"]],
    ["F#m", ["F#m", "Abdim", "AM", "Bm", "C#m", "DM", "EM"]],
    ["Gm", ["Gm", "Adim", "BbM", "Cm", "Dm", "EbM", "FM"]],
    ["Abm", ["Abm", "Bbdim", "BM", "C#m", "Ebm", "EM", "F#M"]],
    ["Am", ["Am", "Bdim", "CM", "Dm", "Em", "FM", "GM"]],
    ["Bbm", ["Bbm", "Cdim", "C#M", "Ebm", "Fm", "F#M", "AbM"]],
    ["Bm", ["Bm", "C#dim", "DM", "Em", "F#m", "GM", "AM"]],
])("Scale %s is made up of chords %s", (scaleName, chordNames) => {
    expect(new Scale(scaleName).chords()).toEqual(chords(...chordNames))
});

test.each([
    ["CM", ["C", "D", "E", "F", "G", "A", "B"]],
    ["C#M", ["C#", "Eb", "F", "F#", "Ab", "Bb", "C"]],
    ["DM", ["D", "E", "F#", "G", "A", "B", "C#"]],
    ["EbM", ["Eb", "F", "G", "Ab", "Bb", "C", "D"]],
    ["EM", ["E", "F#", "Ab", "A", "B", "C#", "Eb"]],
    ["FM", ["F", "G", "A", "Bb", "C", "D", "E"]],
    ["F#M", ["F#", "Ab", "Bb", "B", "C#", "Eb", "F"]],
    ["GM", ["G", "A", "B", "C", "D", "E", "F#"]],
    ["AbM", ["Ab", "Bb", "C", "C#", "Eb", "F", "G"]],
    ["AM", ["A", "B", "C#", "D", "E", "F#", "Ab"]],
    ["BbM", ["Bb", "C", "D", "Eb", "F", "G", "A"]],
    ["BM", ["B", "C#", "Eb", "E", "F#", "Ab", "Bb"]],
    ["Cm", ["C", "D", "Eb", "F", "G", "Ab", "Bb"]],
    ["C#m", ["C#", "Eb", "E", "F#", "Ab", "A", "B"]],
    ["Dm", ["D", "E", "F", "G", "A", "Bb", "C"]],
    ["Ebm", ["Eb", "F", "F#", "Ab", "Bb", "B", "C#"]],
    ["Em", ["E", "F#", "G", "A", "B", "C", "D"]],
    ["Fm", ["F", "G", "Ab", "Bb", "C", "C#", "Eb"]],
    ["F#m", ["F#", "Ab", "A", "B", "C#", "D", "E"]],
    ["Gm", ["G", "A", "Bb", "C", "D", "Eb", "F"]],
    ["Abm", ["Ab", "Bb", "B", "C#", "Eb", "E", "F#"]],
    ["Am", ["A", "B", "C", "D", "E", "F", "G"]],
    ["Bbm", ["Bb", "C", "C#", "Eb", "F", "F#", "Ab"]],
    ["Bm", ["B", "C#", "D", "E", "F#", "G", "A"]],
])("Scale %s has chromas %s", (scaleName, chromaNames) => {
    expect(new Scale(scaleName).chromas()).toEqual(chromas(...chromaNames))
});

test.each([
    ["CM", ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B"]],
    ["C#M", ["C", "C#", "Eb", "F", "F#", "Ab", "Bb", "C", "C#", "Eb", "F", "F#", "Ab", "Bb"]],
    ["DM", ["C#", "D", "E", "F#", "G", "A", "B", "C#", "D", "E", "F#", "G", "A", "B"]],
    ["EbM", ["C", "D", "Eb", "F", "G", "Ab", "Bb", "C", "D", "Eb", "F", "G", "Ab", "Bb"]],
    ["EM", ["C#", "Eb", "E", "F#", "Ab", "A", "B", "C#", "Eb", "E", "F#", "Ab", "A", "B"]],
    ["FM", ["C", "D", "E", "F", "G", "A", "Bb", "C", "D", "E", "F", "G", "A", "Bb"]],
    ["F#M", ["C#", "Eb", "F", "F#", "Ab", "Bb", "B", "C#", "Eb", "F", "F#", "Ab", "Bb", "B"]],
    ["GM", ["C", "D", "E", "F#", "G", "A", "B", "C", "D", "E", "F#", "G", "A", "B"]],
    ["AbM", ["C", "C#", "Eb", "F", "G", "Ab", "Bb", "C", "C#", "Eb", "F", "G", "Ab", "Bb"]],
    ["AM", ["C#", "D", "E", "F#", "Ab", "A", "B", "C#", "D", "E", "F#", "Ab", "A", "B"]],
    ["BbM", ["C", "D", "Eb", "F", "G", "A", "Bb", "C", "D", "Eb", "F", "G", "A", "Bb"]],
    ["BM", ["C#", "Eb", "E", "F#", "Ab", "Bb", "B", "C#", "Eb", "E", "F#", "Ab", "Bb", "B"]],
    ["Cm", ["C", "D", "Eb", "F", "G", "Ab", "Bb", "C", "D", "Eb", "F", "G", "Ab", "Bb"]],
    ["C#m", ["C#", "Eb", "E", "F#", "Ab", "A", "B", "C#", "Eb", "E", "F#", "Ab", "A", "B"]],
    ["Dm", ["C", "D", "E", "F", "G", "A", "Bb", "C", "D", "E", "F", "G", "A", "Bb"]],
    ["Ebm", ["C#", "Eb", "F", "F#", "Ab", "Bb", "B", "C#", "Eb", "F", "F#", "Ab", "Bb", "B"]],
    ["Em", ["C", "D", "E", "F#", "G", "A", "B", "C", "D", "E", "F#", "G", "A", "B"]],
    ["Fm", ["C", "C#", "Eb", "F", "G", "Ab", "Bb", "C", "C#", "Eb", "F", "G", "Ab", "Bb"]],
    ["F#m", ["C#", "D", "E", "F#", "Ab", "A", "B", "C#", "D", "E", "F#", "Ab", "A", "B"]],
    ["Gm", ["C", "D", "Eb", "F", "G", "A", "Bb", "C", "D", "Eb", "F", "G", "A", "Bb"]],
    ["Abm", ["C#", "Eb", "E", "F#", "Ab", "Bb", "B", "C#", "Eb", "E", "F#", "Ab", "Bb", "B"]],
    ["Am", ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B"]],
    ["Bbm", ["C", "C#", "Eb", "F", "F#", "Ab", "Bb", "C", "C#", "Eb", "F", "F#", "Ab", "Bb"]],
    ["Bm", ["C#", "D", "E", "F#", "G", "A", "B", "C#", "D", "E", "F#", "G", "A", "B"]],
])("Scale %s has notes on 2 octaves %s", (scaleName, noteNames) => {
    expect(new Scale(scaleName).notesOn2Octaves()).toEqual(chromas(...noteNames))
});

test.each([
    ["CM", ["C", "E", "G", "C", "E", "G"]],
    ["C#M", ["C#", "F", "Ab", "C#", "F", "Ab"]],
    ["DM", ["D", "F#", "A", "D", "F#", "A"]],
    ["EbM", ["Eb", "G", "Bb", "Eb", "G", "Bb"]],
    ["EM", ["E", "Ab", "B", "E", "Ab", "B"]],
    ["FM", ["C", "F", "A", "C", "F", "A"]],
    ["F#M", ["C#", "F#", "Bb", "C#", "F#", "Bb"]],
    ["GM", ["D", "G", "B", "D", "G", "B"]],
    ["AbM", ["C", "Eb", "Ab", "C", "Eb", "Ab"]],
    ["AM", ["C#", "E", "A", "C#", "E", "A"]],
    ["BM", ["Eb", "F#", "B", "Eb", "F#", "B"]],
    ["BbM", ["D", "F", "Bb", "D", "F", "Bb"]],
    ["Cm", ["C", "Eb", "G", "C", "Eb", "G"]],
    ["C#m", ["C#", "E", "Ab", "C#", "E", "Ab"]],
    ["Dm", ["D", "F", "A", "D", "F", "A"]],
    ["Ebm", ["Eb", "F#", "Bb", "Eb", "F#", "Bb"]],
    ["Em", ["E", "G", "B", "E", "G", "B"]],
    ["Fm", ["C", "F", "Ab", "C", "F", "Ab"]],
    ["F#m", ["C#", "F#", "A", "C#", "F#", "A"]],
    ["Gm", ["D", "G", "Bb", "D", "G", "Bb"]],
    ["Abm", ["Eb", "Ab", "B", "Eb", "Ab", "B"]],
    ["Am", ["C", "E", "A", "C", "E", "A"]],
    ["Bbm", ["C#", "F", "Bb", "C#", "F", "Bb"]],
    ["Bm", ["D", "F#", "B", "D", "F#", "B"]],
    ["Cdim", ["C", "Eb", "F#", "C", "Eb", "F#"]],
    ["C#dim", ["C#", "E", "G", "C#", "E", "G"]],
    ["Ddim", ["D", "F", "Ab", "D", "F", "Ab"]],
    ["Ebdim", ["Eb", "F#", "A", "Eb", "F#", "A"]],
    ["Edim", ["E", "G", "Bb", "E", "G", "Bb"]],
    ["Fdim", ["F", "Ab", "B", "F", "Ab", "B"]],
    ["F#dim", ["C", "F#", "A", "C", "F#", "A"]],
    ["Gdim", ["C#", "G", "Bb", "C#", "G", "Bb"]],
    ["Abdim", ["D", "Ab", "B", "D", "Ab", "B"]],
    ["Adim", ["C", "Eb", "A", "C", "Eb", "A"]],
    ["Bbdim", ["C#", "E", "Bb", "C#", "E", "Bb"]],
    ["Bdim", ["D", "F", "B", "D", "F", "B"]],
])("Chord %s has notes on 2 octaves %s", (chordName, noteNames) => {
    expect(new Chord(chordName).notesOn2Octaves()).toEqual(chromas(...noteNames))
});

test.each([
    "CM", "C#M", "DM", "EbM", "EM", "FM", "F#M", "GM", "AbM", "AM", "BbM", "BM",
    "Cm", "C#m", "Dm", "Ebm", "Em", "Fm", "F#m", "Gm", "Abm", "Am", "Bbm", "Bm"
])("Chords map chromas for scale %s", (scaleName) => {
    const scale = new Scale(scaleName);
    const chromas = scale.chords().flatMap(chord => chord.chromas());
    expect(sortInOctave(scale.chromas())).toStrictEqual(sortInOctave(distinct(chromas)));
})

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

test("sort", () => {
    expect(
        sortInOctave(
            chromas("A", "B", "C", "D", "E", "F", "G")))
        .toEqual(
            chromas("C", "D", "E", "F", "G", "A", "B"))
})

test("scales in fifths order", () => {
    expect(scalesInFifthsOrder())
        .toEqual(scales(
            "CM", "GM", "DM", "AM", "EM", "BM", "F#M", "C#M", "AbM", "EbM", "BbM", "FM",
            "Am", "Em", "Bm", "F#m", "C#m", "Abm", "Ebm", "Bbm", "Fm", "Cm", "Gm", "Dm"))
})

test("chord contains all chromas", () => {
    expect(new Chord("CM").containsAllChromas(chromas("C", "E")))
        .toEqual(true)
})

test("chord contains only some chromas", () => {
    expect(new Chord("CM").containsAllChromas(chromas("C", "D", "E")))
        .toEqual(false)
})

test("chord containing no chroma", () => {
    expect(new Chord("CM").containsAllChromas([]))
        .toEqual(false)
})

test("scale Cm contain Ddim and EbM", () => {
    expect(new Scale("Cm").containsAllChords(chords("Ddim", "EbM")))
        .toEqual(true)
})

test("scale Cm doesn't contain CM", () => {
    expect(new Scale("Cm").containsAllChords(chords("CM", "Ddim", "EbM")))
        .toEqual(false)
})

test("scales containing nothing", () => {
    expect(scalesContaining([], []))
        .toEqual([])
})

test("scales containing Cm chromas", () => {
    expect(scalesContaining(chromas("C", "Eb", "G"), []))
        .toEqual(scales("AbM", "EbM", "BbM", "Fm", "Cm", "Gm"))
})

test("scales containing chords and chromas", () => {
    expect(scalesContaining(chromas("C", "Eb", "G"), chords("Ddim", "EbM")))
        .toEqual(scales("EbM", "Cm"))
})

test("scales containing chords", () => {
    expect(scalesContaining([], chords("Ddim", "EbM")))
        .toEqual(scales("EbM", "Cm"))
})

test("chords containing C and E", () => {
    expect(chordsContaining(chromas("C", "E")))
        .toEqual(chords("CM", "Am"))
})

test("chords containing nothing", () => {
    expect(chordsContaining([]))
        .toEqual([])
})

const scales = (...names: string[]) => names.map(name => new Scale(name))
const chromas = (...names: string[]) => names.map(name => new Chroma(name))
const chords = (...names: string[]) => names.map(name => new Chord(name))