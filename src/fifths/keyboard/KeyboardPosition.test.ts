import KeyboardPositions, {Position} from "./KeyboardPositions";
import {Chroma} from "../theory/MusicTheory";

describe('keyboard positions', () => {
    const positions = new KeyboardPositions(300, 100);
    test.each([
        [["C"], {x: 11, y: 90}],
        [["D"], {x: 32, y: 90}],
        [["E"], {x: 54, y: 90}],
        [["F"], {x: 75, y: 90}],
        [["G"], {x: 96, y: 90}],
        [["A"], {x: 118, y: 90}],
        [["B"], {x: 139, y: 90}],
        [["B", "C"], {x: 161, y: 90}],
        [["B", "D"], {x: 182, y: 90}],
        [["B", "E"], {x: 204, y: 90}],
        [["B", "F"], {x: 225, y: 90}],
        [["B", "G"], {x: 246, y: 90}],
        [["B", "A"], {x: 268, y: 90}],
        [["B", "B"], {x: 289, y: 90}],
        [["C#"], {x: 21, y: 61}],
        [["Eb"], {x: 43, y: 61}],
        [["F#"], {x: 86, y: 61}],
        [["Ab"], {x: 107, y: 61}],
        [["Bb"], {x: 129, y: 61}],
        [["B", "C#"], {x: 171, y: 61}],
        [["B", "Eb"], {x: 193, y: 61}],
        [["B", "F#"], {x: 236, y: 61}],
        [["B", "Ab"], {x: 257, y: 61}],
        [["B", "Bb"], {x: 279, y: 61}],
    ])('%s highest position is %s', (notes: string[], position: Position) => {
        expect(positions.keysPositions(toChromas(notes)).at(-1)).toEqual(position)
    })
})

describe("guess octaves", () => {
    const positions = new KeyboardPositions(0, 0);
    test("on first octave only", () => {
        expect(positions.onOctaves(toChromas(["C", "D"])))
            .toEqual([{key: "C", octave: 0}, {key: "D", octave: 0}])
    })

    test("on 2 octaves", () => {
        expect(positions.onOctaves(toChromas(["B", "C"])))
            .toEqual([{key: "B", octave: 0}, {key: "C", octave: 1}])
    })

    test("for same note on 2 octaves", () => {
        expect(positions.onOctaves(toChromas(["B", "B"])))
            .toEqual([{key: "B", octave: 0}, {key: "B", octave: 1}])
    })
})

test("positions for a chord", () => {
    const keyboard = new KeyboardPositions(300, 100);
    expect(keyboard.keysPositions(toChromas(["F#", "A", "C#"])))
        .toEqual([{x: 86, y: 61}, {x: 118, y: 90}, {x: 171, y: 61}])
})

const toChromas = (names: string[]) => names.map(name => new Chroma(name))
