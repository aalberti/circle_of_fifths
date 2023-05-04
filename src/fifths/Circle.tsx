import ChordBox, {ChordBoxProps} from "./ChordBox";
import React, {FC, useRef} from "react";
import './Musicologist.css'

interface CircleProps {
    onChordSelected: (chordName: string) => void;
}

const Circle: FC<CircleProps> = ({onChordSelected}) => {
    const myself = useRef<HTMLDivElement>(null);
    let radius: number = myself.current == null ? 100 : myself.current.clientWidth / 2;

    return <div className="circle" ref={myself}>
        <div style={{position: "absolute", left: "50%", top: "50%"}}>
            {chordBoxes(radius).map(chord => <ChordBox
                radial={chord.radial} name={chord.name}
                onClick={text => onChordSelected(text)}
            />)}
        </div>
    </div>;
}

function chordBoxes(radius: number): ChordBoxProps[] {
    const chords = [
        {major: "C", minor: "Am"},
        {major: "G", minor: "Em"},
        {major: "D", minor: "Bm"},
        {major: "A", minor: "F#m"},
        {major: "E", minor: "Dbm"},
        {major: "B", minor: "Abm"},
        {major: "Db", minor: "Bbm"},
        {major: "Ab", minor: "Fm"},
        {major: "Eb", minor: "Cm"},
        {major: "Bb", minor: "Gm"},
        {major: "F", minor: "Dm"},
    ]
    let slice = 360 / chords.length;

    return chords
        .map((chord, i) => {return {chord:chord, rotation: slice * i - 90}})
        .flatMap(slice => [
            {
                radial: {
                    radius: radius,
                    rotation: slice.rotation,
                },
                name: slice.chord.major
            }, {
                radial: {
                    radius: radius / 2,
                    rotation: slice.rotation,
                },
                name: slice.chord.minor
            }
        ]);
}

export default Circle;
