export interface Position {
    x: number;
    y: number;
}

class KeyboardPositions {
    constructor(
        public readonly keyboardWidth: number,
        public readonly keyboardHeight: number) {
    }

    static keys = ["C", "Db", "D", "Eb", "E", "", "F", "F#", "G", "Ab", "A", "Bb", "B"]

    keyPosition = (key: string, octaveIndex: number): Position => {
        let interval = this.keyboardWidth / 28;
        let octaveOffset = this.keyboardWidth / 2 * octaveIndex;
        let keyIndex = KeyboardPositions.keys.indexOf(key);
        let decimalX = (keyIndex + 1) * interval + octaveOffset;
        let x = Math.round(decimalX);
        const y = Math.round(this.keyboardHeight * (key.length == 1 ? 0.9 : 0.61));
        return {x: x, y: y}
    };

    onOctaves(notes: string[]): { key: string, octave: number }[] {
        let currentOctave = 0;
        let lastKeyIndex = 0;
        let result = []
        for (const note of notes) {
            const keyIndex = KeyboardPositions.keys.indexOf(note);
            if (keyIndex < lastKeyIndex)
                currentOctave++;
            result.push({key: note, octave: currentOctave});
            lastKeyIndex = keyIndex;
        }
        return result;
    }
}

export default KeyboardPositions