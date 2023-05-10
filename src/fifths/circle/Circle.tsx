import ChordBox, {ChordBoxProps} from "./ChordBox";
import React, {FC, useRef} from "react";
import './Circle.css'

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
        {major: "CM", minor: "Am"},
        {major: "GM", minor: "Em"},
        {major: "DM", minor: "Bm"},
        {major: "AM", minor: "F#m"},
        {major: "EM", minor: "C#m"},
        {major: "BM", minor: "Abm"},
        {major: "C#M", minor: "Bbm"},
        {major: "AbM", minor: "Fm"},
        {major: "EbM", minor: "Cm"},
        {major: "BbM", minor: "Gm"},
        {major: "FM", minor: "Dm"},
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
