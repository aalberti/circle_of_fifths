import {parseInput} from "./InputParser";
import {Chord, Chroma} from "../theory/MusicTheory";

test("case insensitive for sharp chromas", () => {
    expect(parseInput("c#")).toEqual({chromas: [new Chroma("C#")], chords: []})
})

test("case insensitive for flat chromas", () => {
    expect(parseInput("eb")).toEqual({chromas: [new Chroma("Eb")], chords: []})
})

test("ignore double spaces", () => {
    expect(parseInput("A  B")).toEqual({chromas: [new Chroma("A"), new Chroma("B")], chords: []})
})

test("ignore leading spaces", () => {
    expect(parseInput("   A B")).toEqual({chromas: [new Chroma("A"), new Chroma("B")], chords: []})
})

test("ignore trailing spaces", () => {
    expect(parseInput("A B   ")).toEqual({chromas: [new Chroma("A"), new Chroma("B")], chords: []})
})

test("parse chord", () => {
    expect(parseInput("Cm")).toEqual({chromas: [], chords: [new Chord("Cm")]})
})


test("case insensitive for sharp chords", () => {
    expect(parseInput("c#m")).toEqual({chromas: [], chords: [new Chord("C#m")]})
})

test("case insensitive for diminished chords", () => {
    expect(parseInput("edim")).toEqual({chromas: [], chords: [new Chord("Edim")]})
})
