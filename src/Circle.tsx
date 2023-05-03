import Square from "./Square";
import React from "react";

class Circle extends React.Component {
    state = {
        square: []
    };

    buildCircle = () => {
        const num = 7; //Number of Square to be generate
        const type = 1;
        let radius = "100"; //distance from center
        let start = -90; //shift start from 0
        let slice = (360 * type) / num;

        let items = [];
        let i;
        for (i = 0; i < num; i++) {
            let rotate = slice * i + start;

            items.push({
                radius: radius,
                rotate: rotate,
            });
        }
        this.setState({ square: items });
    };

    render() {
        return (
            <div>
                <div className="circle">
                    <div className="circle-hold">
                        {this.state.square.map(function(value, index) {
                            return <Square css={value} num={index + 1} />;
                        })}
                    </div>
                </div>
                <button onClick={this.buildCircle}>Show Square</button>
            </div>
        );
    }
}

export default Circle;
