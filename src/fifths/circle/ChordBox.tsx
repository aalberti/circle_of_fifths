import React, {FC} from "react";
import './Circle.css'

export interface Coordinates {
    x: number,
    y: number
}

export interface ChordBoxProps {
    coordinates: Coordinates,
    name: string,
    onClick?: (text: string) => void
}

const ChordBox: FC<ChordBoxProps> = ({coordinates, name, onClick}) => {
    return <div
        className="chordBox"
        style={{
            top: coordinates.y,
            left: coordinates.x,
            transform:
                `translate(-50%, -50%)`
        }}
        onClick={() => onClick?.(name)}>
        <div style={{verticalAlign: "middle", userSelect: "none"}}>
            {name}
        </div>
    </div>;
};

export default ChordBox;
