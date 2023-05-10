export class Chord {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    private root() {
        const rootName: string = this.name.slice(0, -1);
        return new Note(rootName);
    }

    private isMinor() {
        return this.name.endsWith("m");
    }

    notes(): Note[] {
        if (this.isMinor())
            return [this.root(), this.root().flatThird(), this.root().fifth()];
        else
            return [this.root(), this.root().third(), this.root().fifth()];
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