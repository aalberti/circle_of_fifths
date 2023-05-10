import {Chord, Note} from "./MusicTheory";

describe("chord resolver", () => {
    test.each([
        ["CM", ["C", "E", "G"]],
        ["DbM", ["Db", "F", "Ab"]],
        ["DM", ["D", "F#", "A"]],
        ["EbM", ["Eb", "G", "Bb"]],
        ["EM", ["E", "Ab", "B"]],
        ["FM", ["F", "A", "C"]],
        ["F#M", ["F#", "Bb", "Db"]],
        ["GM", ["G", "B", "D"]],
        ["AbM", ["Ab", "C", "Eb"]],
        ["AM", ["A", "Db", "E"]],
        ["BM", ["B", "Eb", "F#"]],
        ["BbM", ["Bb", "D", "F"]],
        ["Cm", ["C", "Eb", "G"]],
        ["Dbm", ["Db", "E", "Ab"]],
        ["Dm", ["D", "F", "A"]],
        ["Ebm", ["Eb", "F#", "Bb"]],
        ["Em", ["E", "G", "B"]],
        ["Fm", ["F", "Ab", "C"]],
        ["F#m", ["F#", "A", "Db"]],
        ["Gm", ["G", "Bb", "D"]],
        ["Abm", ["Ab", "B", "Eb"]],
        ["Am", ["A", "C", "E"]],
        ["Bbm", ["Bb", "Db", "F"]],
        ["Bm", ["B", "D", "F#"]],
    ])("Chord %s is made up of %s", (chordName, notes) => {
        expect(new Chord(chordName).notes()).toEqual(notes.map(name => new Note(name)))
    })
})