import keyboardImage from "./keyboard_double_octave.png";
import React, {FC, useRef} from "react";
import "./Keyboard.css"
import KeyboardPositions from "./KeyboardPositions";

interface KeyboardProps {
    notes: string[]
}

const Keyboard: FC<KeyboardProps> = ({notes}) => {
    const imageRef = useRef<HTMLImageElement>(null)
    const width = imageRef.current == null ? 300 : imageRef.current.clientWidth
    const height = imageRef.current == null ? 100 : imageRef.current.clientHeight
    const keyboard = new KeyboardPositions(width, height);
    return <div style={{position: "relative"}}>
        <img ref={imageRef} className="keyboardImage" src={keyboardImage} alt={`${notes} on keyboard`}/>
        {keyboard.onOctaves(notes)
            .map(({key, octave}) => keyboard.keyPosition(key, octave))
            .map(({x, y}) => <div className="keyPressed" style={{
                transform: "translate(-50%, -50%)",
                position: "absolute",
                top: `${y}px`,
                left: `${x}px`,
            }}/>)
        }
    </div>;
};

export default Keyboard