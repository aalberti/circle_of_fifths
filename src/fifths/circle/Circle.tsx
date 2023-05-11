import ChordBox, {Coordinates, ChordBoxProps} from "./ChordBox";
import React, {FC, useLayoutEffect, useRef, useState} from "react";
import './Circle.css'

interface CircleProps {
    onChordSelected: (chordName: string) => void;
}

const Circle: FC<CircleProps> = ({onChordSelected}) => {
    const myself = useRef<HTMLDivElement>(null);
    const [radius, setRadius] = useState<number>(100)

    useLayoutEffect(() => {
        setRadius((myself.current?.clientWidth ?? 200) / 2)
    })

    return <div className="circle" ref={myself}>
        <div style={{position: "absolute", left: "50%", top: "50%"}}>
            {chordBoxes(radius).map(chord => <ChordBox
                coordinates={chord.coordinates} name={chord.name}
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
        .map((chord, i) => {
            return {chord: chord, rotation: slice * i - 90}
        })
        .flatMap(slice => [
            {
                coordinates: polarToCartesian(slice.rotation, radius),
                name: slice.chord.major
            }, {
                coordinates: polarToCartesian(slice.rotation, radius / 2),
                name: slice.chord.minor
            }
        ]);
}

function polarToCartesian(angle: number, radius: number): Coordinates {
    function toRadians(angle: number) {
        return angle * Math.PI / 180;
    }

    return {x: Math.cos(toRadians(angle)) * radius, y: Math.sin(toRadians(angle)) * radius}
}

export default Circle;
