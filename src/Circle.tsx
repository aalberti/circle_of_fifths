import Square, {SquareProps} from "./Square";
import React from "react";


class Circle extends React.Component {
    state: { square: SquareProps[] } = {
        square: []
    };

    buildCircle = () => {
        const numberOfSquares = 12; //Number of Square to be generate
        const type = 1;
        let radius = 100; //distance from center
        let start = -90; //shift start from 0
        let slice = (360 * type) / numberOfSquares;

        let squares = [];
        let i;
        for (i = 0; i < numberOfSquares; i++) {
            let rotate = slice * i + start;
            squares.push({
                css: {
                    radius: radius,
                    rotate: rotate,
                },
                text: i
            });
            squares.push({
                css: {
                    radius: radius / 2,
                    rotate: rotate,
                },
                text: `${i}m`
            });
        }
        this.setState({square: squares});
    };

    render() {
        return (
            <div>
                <div className="circle">
                    <div className="circle-hold">
                        {this.state.square.map(value => <Square css={value.css} text={value.text}/>)}
                    </div>
                </div>
                <button onClick={this.buildCircle}>Show Square</button>
            </div>
        );
    }
}

export default Circle;
