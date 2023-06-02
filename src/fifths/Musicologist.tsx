import React, {useState} from "react";
import './Musicologist.css'
import {Search} from "./search/Search";
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {CircleOfFifths} from "./circleOfFiths/CircleOfFifths";

enum Screen {
    Circle,
    Search
}

export const Musicologist = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Circle)

    return <div className="musicologist">
        <ToggleButtonGroup type="radio" name="navigation" defaultValue={[currentScreen]} onChange={setCurrentScreen}>
            <ToggleButton variant="dark" id="navigateToCircle" value={Screen.Circle}>Circle</ToggleButton>
            <ToggleButton variant="dark" id="navigateToSearch" value={Screen.Search}>Search</ToggleButton>
        </ToggleButtonGroup>
        {currentScreen == Screen.Circle
            ? <CircleOfFifths/>
            : <Search/>
        }
    </div>
};