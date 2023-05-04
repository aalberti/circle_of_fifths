import Square, {SquareProps} from "./Square";
import React, {FC, useRef} from "react";
import './Musicologist.css'

interface CircleProps {
    onChordSelected: (chordName: string) => void;
}

const Circle: FC<CircleProps> = ({onChordSelected}) => {
    const myself = useRef<HTMLDivElement>(null);
    let radius: number = myself.current == null ? 100 : myself.current.clientWidth / 2;

    return <div ref={myself}>
        <div className="circle">
            <div className="circle-hold" style={{position: "absolute", left: "50%", top: "50%"}}>
                {squares(radius).map(value => <Square
                    css={value.css} text={value.text}
                    onClick={text => onChordSelected(text)}
                />)}
            </div>
        </div>
    </div>;
}

function squares(radius: number): SquareProps[] {
    const numberOfSquares = 12;
    let slice = 360 / numberOfSquares;

    return Array(12).fill(0)
        .map((_, i) => slice * i - 90)
        .flatMap((rotation, i) => [
            {
                css: {
                    radius: radius,
                    rotate: rotation,
                },
                text: `${i}`
            }, {
                css: {
                    radius: radius / 2,
                    rotate: rotation,
                },
                text: `${i}m`
            }
        ]);
}

export default Circle;
