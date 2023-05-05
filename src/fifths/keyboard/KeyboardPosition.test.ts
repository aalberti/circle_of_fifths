import KeyboardPositions, {Position} from "./KeyboardPositions";

describe('keyboard positions', () => {
    const positions = new KeyboardPositions(300, 100);
    it.each([
        ["C", 0, {x: 12, y: 90}],
        ["D", 0, {x: 33, y: 90}],
        ["E", 0, {x: 55, y: 90}],
        ["F", 0, {x: 76, y: 90}],
        ["G", 0, {x: 97, y: 90}],
        ["A", 0, {x: 119, y: 90}],
        ["B", 0, {x: 140, y: 90}],
        ["C", 1, {x: 162, y: 90}],
        ["D", 1, {x: 183, y: 90}],
        ["E", 1, {x: 205, y: 90}],
        ["F", 1, {x: 226, y: 90}],
        ["G", 1, {x: 247, y: 90}],
        ["A", 1, {x: 269, y: 90}],
        ["B", 1, {x: 290, y: 90}],
    ])('%s position in octave %d is %s', (key:string, octaveIndex: number, position:Position) => {
        expect(positions.keyPosition(key, octaveIndex)).toEqual(position)
    })
})