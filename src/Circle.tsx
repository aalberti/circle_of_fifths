import Square, {SquareProps} from "./Square";
import React, {useState, useRef, FC} from "react";

interface Squares {
    squares: SquareProps[]
}

interface CircleProps {
    onChordSelected: (chordName: string) => void;
}

const Circle: FC<CircleProps> = ({onChordSelected}) => {
    const myself = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<Squares>({
        squares: []
    });
    const buildCircle = () => {
        const numberOfSquares = 12;
        const type = 1;
        let radius: number;
        if (myself.current == null)
            radius = 100;
        else
            radius = myself.current.clientWidth / 2;
        let start = -90;
        let slice = (360 * type) / numberOfSquares;

        let squares = [];
        let i;
        for (i = 0; i < numberOfSquares; i++) {
            let rotate = slice * i + start;
            squares.push({
                css: {
                    radius: radius,
                    rotate: rotate,
                },
                text: `${i}`
            });
            squares.push({
                css: {
                    radius: radius / 2,
                    rotate: rotate,
                },
                text: `${i}m`
            });
        }
        setState({squares: squares});
    };

    return <div ref={myself}>
        <div className="circle">
            <div className="circle-hold" style={{position: "absolute", left: "50%", top: "50%"}}>
                {state.squares.map(value => <Square
                    css={value.css} text={value.text}
                    onClick={text => onChordSelected(text)}
                />)}
            </div>
        </div>
        <button onClick={buildCircle}>Show Square</button>
    </div>;
}

export default Circle;
