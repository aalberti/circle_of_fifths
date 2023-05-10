import React, {FC} from "react";
import './Circle.css'

interface RadialCoordinates {
    rotation: number,
    radius: number,
}

export interface ChordBoxProps {
    radial: RadialCoordinates,
    name: string,
    onClick?: (text: string) => void
}

const ChordBox: FC<ChordBoxProps> = ({radial, name, onClick}) => {
    return <div
        className="chordBox"
        style={{
            transform:
                `translate(-50%, -50%) rotate(${radial.rotation}deg) translate(${radial.radius}px) rotate(${-radial.rotation}deg)`
        }}
        onClick={() => onClick?.(name)}
    >
        <div style={{verticalAlign: "middle", userSelect: "none"}}>
            {name}
        </div>
    </div>;
};

export default ChordBox;
