export interface Position {
    x: number,
    y: number
}

class KeyboardPositions {
    constructor(
        public readonly keyboardWidth: number,
        public readonly keyboardHeight: number) {
    }

    static whiteKeys = ["C", "D", "E", "F", "G", "A", "B"]

    keyPosition = (key: string, octaveIndex: number): Position => {
        let interval = this.keyboardWidth / 14;
        let keyCenterOffset = interval / 2;
        let octaveOffset = this.keyboardWidth / 2 * octaveIndex;
        let keyIndex = KeyboardPositions.whiteKeys.indexOf(key);
        let decimalX = keyIndex * interval + keyCenterOffset + 1 + octaveOffset;
        let x = Math.round(decimalX);
        return {x: x, y: 90}
    };
}

export default KeyboardPositions