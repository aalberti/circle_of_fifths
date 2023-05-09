import {chordNotes, Note} from "./MusicTheory";

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
    ])("Chord %s is made up of %s", (chordName, notes) => {
        expect(chordNotes(chordName)).toEqual(notes.map(name => new Note(name)))
    })
})