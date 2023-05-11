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
        if (!this.name) return []
        const degreeI = new Chord(this.name);
        const generators:ChordGenerator[] = this.chordGenerators(degreeI);
        return generators
            .map(generator => this.toChord(generator))
    }

    private chordGenerators(degreeI: Chord):ChordGenerator[] {
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
}