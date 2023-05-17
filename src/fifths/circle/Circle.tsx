import React, {FC, useState} from "react";
import './Circle.css'
import {Group, Layer, Stage, Text, Wedge} from "react-konva";
import {KonvaEventObject} from "konva/lib/Node";
import {Scale, scalesInFifthsOrder} from "../theory/MusicTheory";

interface DynamicSlice {
    name: string
    hover: boolean
    selected: boolean
}

const Circle: FC<{
    diameter: number
    onScaleSelected: (scale: Scale) => void;
}> = ({diameter, onScaleSelected}) => {
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

    const onClick = (name: string) => {
        setSlices(slices.map(slice => ({
            ...slice,
            selected: (name === slice.name)
        })))
        onScaleSelected(new Scale(name))
    }

    return <div className="circle">
        <Stage width={diameter} height={diameter}>
            {wheel(majors(slices), diameter / 2, diameter / 2, onClick, onMouseOver, onMouseOut)}
            {wheel(minors(slices), diameter / 4, diameter / 2, onClick, onMouseOver, onMouseOut)}
        </Stage></div>
}

function initialFifths() {
    return scalesInFifthsOrder()
        .map(scale => scale.name)
        .map(name => ({
            name: name,
            hover: false,
            selected: false
        }))
}

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
        {slices.map(({name, hover, selected}, i) => {
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
                        fill={selected ? "orange" : hover ? "lightyellow" : "white"}
                        id={name}/>
                    <Text text={name}
                          rotation={angle / 2}
                          x={x}
                          width={radius / 2}
                          height={textHeight}
                          verticalAlign="middle"
                          align="center"
                          id={name}
                          fontSize={selected ? 18 : 14}/>
                </Group>;
            }
        )}
    </Layer>;
}

export default Circle;
