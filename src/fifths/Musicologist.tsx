import React, {useState} from "react";
import Circle from "./circle/Circle";
import './Musicologist.css'
import ScaleBox from "./ScaleBox";
import {Search} from "./search/Search";

export function Musicologist() {
    const [scale, setScale] = useState<string>("");
    return <div className="musicologist">
        <div className="circleOfFifths">
            <Circle diameter={500} onScaleSelected={setScale}/>
            {scale ? <ScaleBox scaleName={scale}/> : null}
        </div>
        <Search/>
    </div>
}