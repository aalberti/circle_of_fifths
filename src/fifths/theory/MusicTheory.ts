import {isEqual} from "lodash";

export function scalesInFifthsOrder() {
    return majorScales().concat(minorScales());
}

export function majorScales() {
    return new Array(12).fill("")
        .map((_, i) => new Chroma("C").plusSemitones(7 * i))
        .map(chroma => chroma.name + "M")
        .map(name => new Scale(name));
}

export function minorScales() {
    return new Array(12).fill("")
        .map((_, i) => new Chroma("A").plusSemitones(7 * i))
        .map(chroma => chroma.name + "m")
        .map(name => new Scale(name));
}

interface ChordGenerator {
    base: Chroma
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

    chromas(): Chroma[] {
        if (this.degreeI().isMajor())
            return [0, 2, 4, 5, 7, 9, 11].map(offset => this.degreeI().root().plusSemitones(offset))
        else
            return [0, 2, 3, 5, 7, 8, 10].map(offset => this.degreeI().root().plusSemitones(offset))
    }

    notesOn2Octaves(): Chroma[] {
        return repeatOver2Octaves(this.chromas());
    }

    containsAllChords(chords: Chord[]): boolean {
        return chords.every(required => this.chords()
            .some(chord => required.name === chord.name))
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

    chromas(): Chroma[] {
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
        return new Chroma(rootName);
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

    containsAllChromas(chromas: Chroma[]) {
        return isNotEmpty(chromas) && chromas
                .map(chroma => chroma.name)
                .every(chroma => this.chromas()
                    .map(myChroma => myChroma.name)
                    .includes(chroma));
    }

    notesOn2Octaves() {
        return repeatOver2Octaves(this.chromas());
    }
}

const octave = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"]

export class Chroma {
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
        return new Chroma(octave[resultIndex])
    }

    isLowerThanInOctave(other: Chroma): boolean {
        return octave.indexOf(this.name) < octave.indexOf(other.name)
    }
}

function repeatOver2Octaves(notes: Chroma[]) {
    const notesOn1Octave = sortInOctave(notes)
    return notesOn1Octave.concat(notesOn1Octave);
}

export function sortInOctave(notes: Chroma[]) {
    return notes.sort((a, b) => a.isLowerThanInOctave(b) ? -1 : 1)
}

export function scalesContaining(chromas: Chroma[], chords: Chord[]) {
    return scalesInFifthsOrder()
        .filter(scale => (isNotEmpty(chords) || isNotEmpty(chromas))
            && (isFalsyOrEmpty(chords) || scale.containsAllChords(chords))
            && (isFalsyOrEmpty(chromas) || scale.chords().some(chord => chord.containsAllChromas(chromas))));
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

export function chordsContaining(chromas: Chroma[]) {
    const allChords = distinct(scalesInFifthsOrder()
        .flatMap(scale => scale.chords()));
    return allChords
        .filter(chord => chord.containsAllChromas(chromas));
}

function isFalsyOrEmpty<T>(items: T[]) {
    return !items || items.length === 0;
}

function isNotEmpty<T>(items: T[]) {
    return !isFalsyOrEmpty(items);
}