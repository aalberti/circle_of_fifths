import React, {FC} from "react";
import './Circle.css'
import {Group, Layer, Stage, Text, Wedge} from "react-konva";

interface CircleProps {
    diameter: number
    onChordSelected: (chordName: string) => void;
}

const Circle: FC<CircleProps> = ({diameter, onChordSelected}) => {
    const slices = ["C", "G", "D", "A", "E", "B", "C#", "Ab", "Eb", "Bb", "F"]
    return <div className="circle">
        <Stage width={diameter} height={diameter}>
            {wheel(slices.map(name => name + "M"), onChordSelected, diameter / 2, diameter / 2)}
            {wheel(slices.map(name => name + "m"), onChordSelected, diameter / 4, diameter / 2)}
        </Stage></div>
}

function wheel(slices: string[], onClick: (value: string) => void, radius: number, centerOffset: number) {
    return <Layer x={centerOffset} y={centerOffset}>
        {slices.map((name, i) => {
                const angle = 360 / slices.length
                const rotation = i * angle
                const x = radius / 2
                const halfAngleInRadians = angle * Math.PI / 360;
                const textHeight = Math.tan(halfAngleInRadians) * x * 2
                return <Group key={name} rotation={rotation} onClick={() => onClick(name)}>
                    <Wedge
                        angle={angle}
                        radius={radius}
                        stroke="grey"
                        strokeWidth={1}
                        fill="white"
                    />
                    <Text text={name}
                          rotation={angle / 2}
                          x={x}
                          width={radius / 2}
                          height={textHeight}
                          verticalAlign="middle"
                          align="center"/>
                </Group>;
            }
        )}
    </Layer>;
}

export default Circle;
