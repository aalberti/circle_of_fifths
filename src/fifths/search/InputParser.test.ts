import {parseInput} from "./InputParser";
import {Chord, Note} from "../theory/MusicTheory";

test("case insensitive for sharp notes", () => {
    expect(parseInput("c#")).toEqual({notes: [new Note("C#")], chords: []})
})

test("case insensitive for flat notes", () => {
    expect(parseInput("eb")).toEqual({notes: [new Note("Eb")], chords: []})
})

test("ignore double spaces", () => {
    expect(parseInput("A  B")).toEqual({notes: [new Note("A"), new Note("B")], chords: []})
})

test("ignore leading spaces", () => {
    expect(parseInput("   A B")).toEqual({notes: [new Note("A"), new Note("B")], chords: []})
})

test("ignore trailing spaces", () => {
    expect(parseInput("A B   ")).toEqual({notes: [new Note("A"), new Note("B")], chords: []})
})

test("parse chord", () => {
    expect(parseInput("Cm")).toEqual({notes: [], chords: [new Chord("Cm")]})
})


test("case insensitive for sharp chords", () => {
    expect(parseInput("c#m")).toEqual({notes: [], chords: [new Chord("C#m")]})
})

test("case insensitive for diminished chords", () => {
    expect(parseInput("edim")).toEqual({notes: [], chords: [new Chord("Edim")]})
})
