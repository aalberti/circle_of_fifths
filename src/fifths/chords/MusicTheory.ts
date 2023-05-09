export const chordNotes = (chord: string): Note[] => {
    const root = new Note(chord);
    return [root, third(root), fifth(root)]
};

export class Note {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const octave = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"]

const third = (note: Note) => plusSemitones(note, 4)

const fifth = (note: Note) => plusSemitones(note, 7)

const plusSemitones = (note: Note, semitones: number) => new Note(octave[(octave.indexOf(note.name) + semitones) % octave.length]);

