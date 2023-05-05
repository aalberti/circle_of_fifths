import KeyboardPositions, {Position} from "./KeyboardPositions";

describe('keyboard positions', () => {
    const positions = new KeyboardPositions(300, 100);
    test.each([
        ["C", 0, {x: 11, y: 90}],
        ["D", 0, {x: 32, y: 90}],
        ["E", 0, {x: 54, y: 90}],
        ["F", 0, {x: 75, y: 90}],
        ["G", 0, {x: 96, y: 90}],
        ["A", 0, {x: 118, y: 90}],
        ["B", 0, {x: 139, y: 90}],
        ["C", 1, {x: 161, y: 90}],
        ["D", 1, {x: 182, y: 90}],
        ["E", 1, {x: 204, y: 90}],
        ["F", 1, {x: 225, y: 90}],
        ["G", 1, {x: 246, y: 90}],
        ["A", 1, {x: 268, y: 90}],
        ["B", 1, {x: 289, y: 90}],
        ["Db", 0, {x: 21, y: 61}],
        ["Eb", 0, {x: 43, y: 61}],
        ["F#", 0, {x: 86, y: 61}],
        ["Ab", 0, {x: 107, y: 61}],
        ["Bb", 0, {x: 129, y: 61}],
        ["Db", 1, {x: 171, y: 61}],
        ["Eb", 1, {x: 193, y: 61}],
        ["F#", 1, {x: 236, y: 61}],
        ["Ab", 1, {x: 257, y: 61}],
        ["Bb", 1, {x: 279, y: 61}],
    ])('%s position in octave %d is %s', (key: string, octaveIndex: number, position: Position) => {
        expect(positions.keyPosition(key, octaveIndex)).toEqual(position)
    })
})

describe("guess octaves", () => {
    const positions = new KeyboardPositions(0, 0);
    test("on first octave only", () => {
        expect(positions.onOctaves(["C", "D"]))
            .toEqual([{key: "C", octave: 0}, {key: "D", octave: 0}])
    })

    test("on 2 octaves", () => {
        expect(positions.onOctaves(["B", "C"]))
            .toEqual([{key: "B", octave: 0}, {key: "C", octave: 1}])
    })
})

test("positions for a chord", () => {
    const keyboard = new KeyboardPositions(300, 100);
    expect(keyboard.keysPositions(["F#", "A", "Db"]))
        .toEqual([{x: 86, y: 61}, {x: 118, y: 90}, {x: 171, y: 61}])
})
