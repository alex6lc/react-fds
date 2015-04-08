var React = require('react');

var Line = require('../components/Line');
var Arrow = require('../components/Isomorphic/Arrow');

var { unidirectional } = require('../styles');


module.exports = React.createClass({
    render() {
        const ratio = 25;
        const circleRadius = 20;
        const paddingTop = 80;
        const paddingLeft = 50;

        var LineDiagram = (x1, y1, x2, y2) => {
            return <Line x1={x1} y1={y1} x2={x2} y2={y2}
                paddingLeft={paddingLeft}
                paddingTop={paddingTop}
                ratio={ratio}
                styles={unidirectional} />;
        };

        var Circle = (cx, cy) => {
            cx = cx * ratio + paddingLeft;
            cy = cy * ratio + paddingTop;

            return <circle cx={cx} cy={cy} r={circleRadius}
                stroke={unidirectional.circleStrokeColor}
                strokeWidth={unidirectional.circleStrokeWidth}
                fill={unidirectional.circleFill} />;
        };

        return (
            <section>
                <h3>Unidirectional Flow</h3>

                <svg width={8 * ratio + paddingLeft} height="400">
                    <Line x1={5 * ratio} y1={0} x2={5 * ratio} y2={ratio + paddingTop} styles={unidirectional} />
                    <Line x1={5 * ratio} y1={ratio + paddingTop} x2={ratio} y2={7 * ratio + paddingTop} styles={unidirectional} />
                    <Line x1={ratio} y1={7 * ratio + paddingTop} x2={ratio} y2={400} styles={unidirectional} />
                    <Line x1={ratio} y1={400} x2={ratio - 10} y2={380} styles={unidirectional} />
                    <Line x1={ratio} y1={400} x2={ratio + 10} y2={380} styles={unidirectional} />

                    { LineDiagram(5, 1, 3, 4) }

                    { LineDiagram(3, 4, 1, 7) }
                    { LineDiagram(3, 4, 5, 7) }

                    { LineDiagram(5, 7, 3, 10) }
                    { LineDiagram(5, 7, 7, 10) }

                    { Circle(5, 1) }

                    { Circle(3, 4) }

                    { Circle(1, 7) }
                    { Circle(5, 7) }

                    { Circle(3, 10) }
                    { Circle(7, 10) }
                </svg>

                <aside className="notes">
                    Props, propriétés, sont des parametre immutable passé d'un parent à ces enfants
                    <br />
                    State, c'est un sapshot a un certin temps donné.
                    <br />
                    Normalement à la suite d'un input d'un utilisateur
                </aside>
            </section>
        );
    }
});