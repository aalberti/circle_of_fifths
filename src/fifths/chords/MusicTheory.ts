export class Scale {
    readonly name: String;
    constructor(name: String) {
        this.name = name;
    }

    chords(): Chord[] {
        const majorProgression = [
            {semitones: 0, modifier: "M"},
            {semitones: 2, modifier: "m"},
            {semitones: 4, modifier: "m"},
            {semitones: 5, modifier: "M"},
            {semitones: 7, modifier: "M"},
            {semitones: 9, modifier: "m"},
            {semitones: 11, modifier: "mb5"},
        ]
        const firstNote = new Chord(this.name).root()
        return majorProgression
            .map(generator => this.toChord(firstNote, generator))
    }

    private toChord(note: Note, generator: { modifier: string; semitones: number }) {
        return new Chord(note.plusSemitones(generator.semitones).name + generator.modifier);
    }
}

export class Chord {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    notes(): Note[] {
        if (this.isMinor())
            return [this.root(), this.root().flatThird(), this.root().fifth()];
        else
            return [this.root(), this.root().third(), this.root().fifth()];
    }

    private root() {
        const rootName: string = this.name.slice(0, -1);
        return new Note(rootName);
    }

    private isMinor() {
        return this.name.endsWith("m");
    }
}

const octave = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"]

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

    fifth() {
        return this.plusSemitones(7)
    }

    plusSemitones(semitones: number) {
        const thisIndex = octave.indexOf(this.name);
        const resultIndex = (thisIndex + semitones) % octave.length;
        return new Note(octave[resultIndex])
    }
}