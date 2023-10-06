import {Chroma} from "../theory/MusicTheory";

export interface Position {
    x: number;
    y: number;
}

class KeyboardPositions {
    constructor(
        public readonly keyboardWidth: number,
        public readonly keyboardHeight: number) {
    }

    keysPositions = (chromas: Chroma[]) => this.onOctaves(chromas)
        .map(({key, octave}) => this.keyPosition(key, octave));

    static keys = ["C", "C#", "D", "Eb", "E", "", "F", "F#", "G", "Ab", "A", "Bb", "B"]

    private keyPosition = (key: string, octaveIndex: number): Position => {
        let interval = this.keyboardWidth / 28;
        let octaveOffset = this.keyboardWidth / 2 * octaveIndex;
        let keyIndex = KeyboardPositions.keys.indexOf(key);
        let decimalX = (keyIndex + 1) * interval + octaveOffset;
        let x = Math.round(decimalX);
        const y = Math.round(this.keyboardHeight * (key.length === 1 ? 0.9 : 0.61));
        return {x: x, y: y}
    };

    onOctaves = (chromas: Chroma[]): { key: string, octave: number }[] => {
        let currentOctave = 0;
        let lastKeyIndex = -1;
        let result = []
        for (const chroma of chromas) {
            const keyIndex = KeyboardPositions.keys.indexOf(chroma.name);
            if (keyIndex <= lastKeyIndex)
                currentOctave++;
            result.push({key: chroma.name, octave: currentOctave});
            lastKeyIndex = keyIndex;
        }
        return result;
    };
}

export default KeyboardPositions