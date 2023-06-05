import Circle from "../circle/Circle";
import ScaleDetail from "../scale/ScaleDetail";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {selectedScale, setSelectedScale} from "./fifthsReducer";

export const CircleOfFifths = () => {
    const dispatch = useAppDispatch()
    const currentScale = useAppSelector(selectedScale)
    return <div className="circleOfFifths">
        <Circle diameter={500} onScaleSelected={scale => dispatch(setSelectedScale(scale.name))} selection={currentScale}/>
        {currentScale ? <ScaleDetail scale={currentScale}/> : null}
    </div>
}