import {Chord, Note} from "./MusicTheory";

describe("chord resolver", () => {
    test.each([
        ["C", ["C", "E", "G"]],
        ["Db", ["Db", "F", "Ab"]],
        ["D", ["D", "F#", "A"]],
        ["Eb", ["Eb", "G", "Bb"]],
        ["E", ["E", "Ab", "B"]],
        ["F", ["F", "A", "C"]],
        ["F#", ["F#", "Bb", "Db"]],
        ["G", ["G", "B", "D"]],
        ["Ab", ["Ab", "C", "Eb"]],
        ["A", ["A", "Db", "E"]],
        ["B", ["B", "Eb", "F#"]],
        ["Bb", ["Bb", "D", "F"]],
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