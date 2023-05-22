import {isEqual} from "lodash";

export function scalesInFifthsOrder() {
    return majorScales().concat(minorScales());
}

export function majorScales() {
    return new Array(12).fill("")
        .map((_, i) => new Note("C").plusSemitones(7 * i))
        .map(note => note.name + "M")
        .map(name => new Scale(name));
}

export function minorScales() {
    return new Array(12).fill("")
        .map((_, i) => new Note("A").plusSemitones(7 * i))
        .map(note => note.name + "m")
        .map(name => new Scale(name));
}

interface ChordGenerator {
    base: Note
    semitonesOffset: number
    modifier: string
}

export class Scale {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    chords(): Chord[] {
        const generators: ChordGenerator[] = this.chordGenerators(this.degreeI());
        return generators
            .map(generator => this.toChord(generator))
    }

    notes(): Note[] {
        if (this.degreeI().isMajor())
            return [0, 2, 4, 5, 7, 9, 11].map(offset => this.degreeI().root().plusSemitones(offset))
        else
            return [0, 2, 3, 5, 7, 8, 10].map(offset => this.degreeI().root().plusSemitones(offset))
    }

    notesOn2Octaves(): Note[] {
        const notesOn1Octave = sortInOctave(this.notes())
        return notesOn1Octave.concat(notesOn1Octave);
    }

    private degreeI() {
        return new Chord(this.name);
    }

    private chordGenerators(degreeI: Chord): ChordGenerator[] {
        let generators: { offset: number; modifier: string }[];
        if (degreeI.isMajor()) {
            generators = [
                {offset: 0, modifier: "M"},
                {offset: 2, modifier: "m"},
                {offset: 4, modifier: "m"},
                {offset: 5, modifier: "M"},
                {offset: 7, modifier: "M"},
                {offset: 9, modifier: "m"},
                {offset: 11, modifier: "dim"},
            ];
        } else {
            generators = [
                {offset: 0, modifier: "m"},
                {offset: 2, modifier: "dim"},
                {offset: 3, modifier: "M"},
                {offset: 5, modifier: "m"},
                {offset: 7, modifier: "m"},
                {offset: 8, modifier: "M"},
                {offset: 10, modifier: "M"},
            ];
        }
        return generators
            .map(generator => ({
                base: degreeI.root(),
                semitonesOffset: generator.offset,
                modifier: generator.modifier
            }));
    }

    private toChord(generator: ChordGenerator) {
        return new Chord(generator.base.plusSemitones(generator.semitonesOffset).name + generator.modifier);
    }
}

export class Chord {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    notes(): Note[] {
        if (this.isDiminished())
            return [this.root(), this.root().flatThird(), this.root().flatFifth()];
        else if (this.isMinor())
            return [this.root(), this.root().flatThird(), this.root().fifth()];
        else
            return [this.root(), this.root().third(), this.root().fifth()];
    }

    root() {
        let rootName: string;
        if (this.isDiminished())
            rootName = this.name.slice(0, -3);
        else
            rootName = this.name.slice(0, -1);
        return new Note(rootName);
    }

    isDiminished() {
        return this.name.endsWith("dim");
    }

    isMinor() {
        return this.name.endsWith("m");
    }

    isMajor() {
        return this.name.endsWith("M");
    }

    containsAllNotes(notes: Note[]) {
        return notes && notes.length > 0 && notes
            .map(note => note.name)
            .every(note => this.notes()
                .map(myNote => myNote.name)
                .includes(note));
    }
}

const octave = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"]

export class Note {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    third() {
        return this.plusSemitones(4)
    }

    flatThird() {
        return this.plusSemitones(3)
    }

    flatFifth() {
        return this.plusSemitones(6)
    }

    fifth() {
        return this.plusSemitones(7)
    }

    plusSemitones(semitones: number) {
        const thisIndex = octave.indexOf(this.name);
        const resultIndex = (thisIndex + semitones) % octave.length;
        return new Note(octave[resultIndex])
    }

    isLowerThanInOctave(other: Note): boolean {
        return octave.indexOf(this.name) < octave.indexOf(other.name)
    }
}

export function sortInOctave(notes: Note[]) {
    return notes.sort((a, b) => a.isLowerThanInOctave(b) ? -1 : 1)
}

export function scalesContaining(notes: Note[]) {
    return scalesInFifthsOrder()
        .filter(scale => scale.chords()
            .some(chord => chord.containsAllNotes(notes)));
}

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

export function chordsContaining(notes: Note[]) {
    const allChords = distinct(scalesInFifthsOrder()
        .flatMap(scale => scale.chords()));
    return allChords
        .filter(chord => chord.containsAllNotes(notes));
}