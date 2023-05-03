import React from "react";

interface CssProps {
    rotate: number,
    radius: number,
}

export interface SquareProps {
    css: CssProps,
    text: string,
}

const Square = (props: SquareProps) => {
    const css = props.css;
    console.log(props.text);
    return (
        <div
            className="square"
            style={{
                transform:
                    `translate(-50%, -50%) rotate(${css.rotate}deg) translate(${css.radius}px) rotate(${-css.rotate}deg)`
            }}
        >
            {props.text}
        </div>
    );
};

export default Square;
