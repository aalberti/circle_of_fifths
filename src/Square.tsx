import React from "react";

interface CssProps {
    rotate: number,
    radius: number,
}

export interface SquareProps {
    css: CssProps,
    num: number,
}

class Square extends React.Component<SquareProps> {
    render() {
        const css = this.props.css;
        console.log(this.props.num);
        return (
            <div
                className="square"
                style={{
                    transform:
                        `rotate(${css.rotate}deg) translate(${css.radius}px) rotate(${-css.rotate}deg)`
                }}
            >
                {this.props.num}
            </div>
        );
    }
}

export default Square;
