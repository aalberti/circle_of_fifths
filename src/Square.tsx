import React, {FC} from "react";

interface CssProps {
    rotate: number,
    radius: number,
}

export interface SquareProps {
    css: CssProps,
    text: string,
    onClick?: (text: string) => void
}

const Square: FC<SquareProps> = ({css, text, onClick}) => {
    return (
        <div
            className="square"
            style={{
                transform:
                    `translate(-50%, -50%) rotate(${css.rotate}deg) translate(${css.radius}px) rotate(${-css.rotate}deg)`
            }}
            onClick={() => onClick?.(text)}
        >
            <div style={{verticalAlign:"middle", userSelect:"none"}}>
                {text}
            </div>
        </div>
    );
};

export default Square;
