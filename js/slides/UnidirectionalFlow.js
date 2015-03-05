var React = require('react');

var Line = require('../components/Line');

var styles = {
    lineStrokeWidth: 4,
    lineStrokeColor: 'red',
    fillColor: 'red',

    sizeRatio: 25,
    paddingTop: 80,
    paddingLeft: 50
};

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
                styles={styles} />;
        };

        var Circle = (cx, cy) => {
            cx = cx * ratio + paddingLeft;
            cy = cy * ratio + paddingTop;

            return <circle cx={cx} cy={cy} r={circleRadius}
                stroke={styles.lineStrokeColor}
                strokeWidth={styles.lineStrokeWidth}
                fill={styles.fillColor} />;
        };

        return (
            <section>
                <h2>Unidirectional Flow</h2>

                <svg width={8 * ratio + paddingLeft} height="400">
                    <Line x1={5 * ratio} y1={0} x2={5 * ratio} y2={ratio + paddingTop} styles={styles} />
                    <Line x1={5 * ratio} y1={ratio + paddingTop} x2={ratio} y2={5 * ratio + paddingTop} styles={styles} />
                    <Line x1={ratio} y1={5 * ratio + paddingTop} x2={ratio} y2={400} styles={styles} />

                    { LineDiagram(5, 1, 3, 3) }

                    { LineDiagram(3, 3, 1, 5) }
                    { LineDiagram(3, 3, 5, 5) }

                    { LineDiagram(1, 5, 3, 7) }
                    { LineDiagram(5, 5, 7, 7) }


                    { Circle(5, 1) }

                    { Circle(3, 3) }

                    { Circle(1, 5) }
                    { Circle(5, 5) }

                    { Circle(3, 7) }
                    { Circle(7, 7) }
                </svg>
            </section>
        );
    }
});