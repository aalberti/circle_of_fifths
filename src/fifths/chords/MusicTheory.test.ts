import {Chord, Note, Scale, scalesInFifthsOrder, sortInOctave} from "./MusicTheory";
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
])("Chord %s is made up of %s", (chordName, notes) => {
    expect(new Chord(chordName).notes()).toEqual(notes.map(name => new Note(name)))
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
])("Scale %s is made up of chords %s", (scaleName, chords) => {
    expect(new Scale(scaleName).chords()).toEqual(chords.map(name => new Chord(name)))
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
])("Scale %s has notes %s", (scaleName, notes) => {
    expect(new Scale(scaleName).notes()).toEqual(notes.map(name => new Note(name)))
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
])("Scale %s has notes on 2 octaves %s", (scaleName, notes) => {
    expect(new Scale(scaleName).notesOn2Octaves()).toEqual(notes.map(name => new Note(name)))
});

test.each([
    "CM", "C#M", "DM", "EbM", "EM", "FM", "F#M", "GM", "AbM", "AM", "BbM", "BM",
    "Cm", "C#m", "Dm", "Ebm", "Em", "Fm", "F#m", "Gm", "Abm", "Am", "Bbm", "Bm"
])("Chords map notes for scale %s", (scaleName) => {
    const scale = new Scale(scaleName);
    const notes = scale.chords().flatMap(chord => chord.notes());
    expect(sortInOctave(scale.notes())).toStrictEqual(sortInOctave(distinct(notes)));
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
    const unsorted = ["A", "B", "C", "D", "E", "F", "G"].map(name => new Note(name));
    expect(distinct(sortInOctave(unsorted))).toEqual(["C", "D", "E", "F", "G", "A", "B"].map(name => new Note(name)))
})

test("scales in fifths order", () => {
    expect(scalesInFifthsOrder())
        .toEqual([
                "CM", "GM", "DM", "AM", "EM", "BM", "F#M", "C#M", "AbM", "EbM", "BbM", "FM",
                "Am", "Em", "Bm", "F#m", "C#m", "Abm", "Ebm", "Bbm", "Fm", "Cm", "Gm", "Dm"
            ].map(name => new Scale(name))
        )
})