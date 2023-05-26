import React, {useState} from "react";
import Circle from "./circle/Circle";
import './Musicologist.css'
import ScaleDetail from "./scale/ScaleDetail";
import {Search} from "./search/Search";
import {Scale} from "./theory/MusicTheory";
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";

enum Screen {
    Circle,
    Search
}

export const Musicologist = () => {
    const [scale, setScale] = useState<Scale | null>(null);
    const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Circle)

    return <div className="musicologist">
        <ToggleButtonGroup type="radio" name="navigation" defaultValue={[currentScreen]} onChange={setCurrentScreen}>
            <ToggleButton variant="dark" id="navigateToCircle" value={Screen.Circle}>Circle</ToggleButton>
            <ToggleButton variant="dark" id="navigateToSearch" value={Screen.Search}>Search</ToggleButton>
        </ToggleButtonGroup>
        {currentScreen == Screen.Circle
            ? <div className="circleOfFifths">
                <Circle diameter={500} onScaleSelected={setScale}/>
                {scale ? <ScaleDetail scale={scale}/> : null}
            </div>
            : <Search/>
        }
    </div>
};