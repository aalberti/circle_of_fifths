import keyboardImage from "./keyboard_double_octave.png";
import React, {FC, useRef} from "react";
import "./Keyboard.css"
import KeyboardPositions from "./KeyboardPositions";
import {Chroma} from "../theory/MusicTheory";

const Keyboard: FC<{ chromas: Chroma[] }> = ({chromas}) => {
    const imageRef = useRef<HTMLImageElement>(null)
    const width = imageRef.current == null ? 300 : imageRef.current.clientWidth
    const height = imageRef.current == null ? 100 : imageRef.current.clientHeight
    const keyboard = new KeyboardPositions(width, height);
    return <div className="keyboardContainer">
        <div style={{position: "relative"}}>
            <img ref={imageRef} className="keyboardImage" src={keyboardImage} alt={`${chromas} on keyboard`}/>
            {keyboard.keysPositions(chromas)
                .map(({x, y}) => <div key={`(${x}, ${y})`} className="keyPressed" style={{
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    top: `${y}px`,
                    left: `${x}px`,
                }}/>)
            }
        </div>
    </div>;
};

export default Keyboard