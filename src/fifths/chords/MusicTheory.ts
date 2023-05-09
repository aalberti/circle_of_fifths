export class Chord {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }

    private root = () => new Note(this.name)

    notes = (): Note[] => [this.root(), this.root().third(), this.root().fifth()]
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

    fifth() {
        return this.plusSemitones(7)
    }

    plusSemitones(semitones: number) {
        const thisIndex = octave.indexOf(this.name);
        const resultIndex = (thisIndex + semitones) % octave.length;
        return new Note(octave[resultIndex])
    }
}