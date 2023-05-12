import React, {FC, useState} from "react";
import './Circle.css'
import {Group, Layer, Stage, Text, Wedge} from "react-konva";
import {KonvaEventObject} from "konva/lib/Node";

interface CircleProps {
    diameter: number
    onScaleSelected: (scaleName: string) => void;
}

interface DynamicSlice {
    name: string
    hover: boolean
}

const Circle: FC<CircleProps> = ({diameter, onScaleSelected}) => {
    const [slices, setSlices] =
        useState<DynamicSlice[]>(initialFifths())
    const onMouseOver = (e: KonvaEventObject<MouseEvent>) => {
        setSlices(slices.map(slice => ({
            ...slice,
            hover: (e.target.id() === slice.name)
        })))
    }

    const onMouseOut = () => {
        setSlices(slices.map(slice => ({
            ...slice,
            hover: false
        })))
    }

    return <div className="circle">
        <Stage width={diameter} height={diameter}>
            {wheel(majors(slices), diameter / 2, diameter / 2, onScaleSelected, onMouseOver, onMouseOut)}
            {wheel(minors(slices), diameter / 4, diameter / 2, onScaleSelected, onMouseOver, onMouseOut)}
        </Stage></div>
}

const initialFifths = () => ["C", "G", "D", "A", "E", "B", "C#", "Ab", "Eb", "Bb", "F"]
    .flatMap(name => [
        {
            name: name + "M",
            hover: false
        }, {
            name: name + "m",
            hover: false
        }
    ]);

function majors(slices: DynamicSlice[]) {
    return slices.filter(slice => slice.name.endsWith("M"));
}

function minors(slices: DynamicSlice[]) {
    return slices.filter(slice => slice.name.endsWith("m"));
}

function wheel(slices: DynamicSlice[], radius: number, centerOffset: number,
               onClick: (value: string) => void,
               onMouseOver: (e: KonvaEventObject<MouseEvent>) => void, onMouseOut: (e: KonvaEventObject<MouseEvent>) => void) {
    return <Layer x={centerOffset} y={centerOffset}>
        {slices.map(({name, hover}, i) => {
                const angle = 360 / slices.length
                const rotation = i * angle - 90 - angle / 2
                const x = radius / 2
                const halfAngleInRadians = angle * Math.PI / 360;
                const textHeight = Math.tan(halfAngleInRadians) * x * 2
                return <Group key={name} rotation={rotation} onClick={() => onClick(name)} onMouseOver={onMouseOver}
                              onMouseOut={onMouseOut}
                              id={name}>
                    <Wedge
                        angle={angle}
                        radius={radius}
                        stroke="grey"
                        strokeWidth={1}
                        fill={hover ? "lightyellow" : "white"}
                        id={name}/>
                    <Text text={name}
                          rotation={angle / 2}
                          x={x}
                          width={radius / 2}
                          height={textHeight}
                          verticalAlign="middle"
                          align="center"
                          id={name}/>
                </Group>;
            }
        )}
    </Layer>;
}

export default Circle;
