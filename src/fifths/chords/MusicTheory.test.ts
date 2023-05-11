import {Chord, Note, Scale} from "./MusicTheory";

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
])("Scale %s is made up of %s", (scaleName, chords) => {
    expect(new Scale(scaleName).chords()).toEqual(chords.map(name => new Chord(name)))
});

test("unknown scale has no chord", () => {
    expect(new Scale("").chords()).toEqual([])
})