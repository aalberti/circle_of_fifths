import Circle from "../circle/Circle";
import ScaleDetail from "../scale/ScaleDetail";
import React from "react";
import {selectedScale, setSelectedScale, useAppDispatch, useAppSelector} from "../../store";

export const CircleOfFifths = () => {
    const dispatch = useAppDispatch()
    const currentScale = useAppSelector(selectedScale)
    return <div className="circleOfFifths">
        <Circle diameter={500} onScaleSelected={scale => dispatch(setSelectedScale(scale))} selection={currentScale}/>
        {currentScale ? <ScaleDetail scale={currentScale}/> : null}
    </div>
}