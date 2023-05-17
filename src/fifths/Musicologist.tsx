import React, {useState} from "react";
import Circle from "./circle/Circle";
import './Musicologist.css'
import ScaleDetail from "./scale/ScaleDetail";
import {Search} from "./search/Search";

export const Musicologist = () => {
    const [scale, setScale] = useState<string>("");
    return <div className="musicologist">
        <div className="circleOfFifths">
            <Circle diameter={500} onScaleSelected={setScale}/>
            {scale ? <ScaleDetail scaleName={scale}/> : null}
        </div>
        <Search/>
    </div>
};