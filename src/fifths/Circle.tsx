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
        <div className="circle-hold" style={{position: "absolute", left: "50%", top: "50%"}}>
            {chords(radius).map(chord => <ChordBox
                radial={chord.radial} name={chord.name}
                onClick={text => onChordSelected(text)}
            />)}
        </div>
    </div>;
}

function chords(radius: number): ChordBoxProps[] {
    const numberOfChords = 12;
    let slice = 360 / numberOfChords;

    return Array(12).fill(0)
        .map((_, i) => slice * i - 90)
        .flatMap((rotation, i) => [
            {
                radial: {
                    radius: radius,
                    rotation: rotation,
                },
                name: `${i}`
            }, {
                radial: {
                    radius: radius / 2,
                    rotation: rotation,
                },
                name: `${i}m`
            }
        ]);
}

export default Circle;
