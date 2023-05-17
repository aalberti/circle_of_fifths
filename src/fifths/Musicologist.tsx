import React, {useState} from "react";
import Circle from "./circle/Circle";
import './Musicologist.css'
import ScaleDetail from "./scale/ScaleDetail";
import {Search} from "./search/Search";
import {Scale} from "./theory/MusicTheory";

export const Musicologist = () => {
    const [scale, setScale] = useState<Scale|null>(null);
    return <div className="musicologist">
        <div className="circleOfFifths">
            <Circle diameter={500} onScaleSelected={setScale}/>
            {scale ? <ScaleDetail scale={scale}/> : null}
        </div>
        <Search/>
    </div>
};