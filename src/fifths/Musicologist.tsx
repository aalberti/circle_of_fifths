import React, {useState} from "react";
import Circle from "./circle/Circle";
import './Musicologist.css'
import ScaleBox from "./ScaleBox";

export function Musicologist() {
    const [scale, setScale] = useState<string>("");
    return <div className="musicologist">
        <Circle diameter={500} onScaleSelected={setScale}/>
        <ScaleBox scaleName={scale}/>
    </div>
}