var React = require('react');

var { virtualDomDiff } = require('../styles');

module.exports = React.createClass({
    render() {
        const ratio = 25;
        const circleRadius = 20;
        
        var Line = (x1, y1, x2, y2) => {
            x1 = x1 * ratio;
            x2 = x2 * ratio;
            y1 = y1 * ratio;
            y2 = y2 * ratio;
            
            return <line x1={x1} y1={y1} x2={x2} y2={y2}
                strokeWidth={virtualDomDiff.lineStrokeWidth}
                stroke={virtualDomDiff.lineStrokeColor} />;
        };

        //var Circle = (cx, cy, fill = '') => {
        var Circle = (cx, cy, fill) => {
            cx = cx * ratio;
            cy = cy * ratio;

            fill = virtualDomDiff['circleFill' + (fill  || '')];

            return <circle cx={cx} cy={cy} r={circleRadius}
                stroke={virtualDomDiff.lineStrokeColor}
                strokeWidth={virtualDomDiff.lineStrokeWidth}
                fill={fill} />;
        };

        return (
            <section>
                <h2>Virtual DOM - Diff</h2>

                <div className="row middle-xs">
                    <div className="col-xs-4">
                        <svg width="200" height="400">
                            { Line(5, 1, 3, 3) }
                            { Line(5, 1, 7, 3) }

                            { Line(3, 3, 1, 5) }
                            { Line(3, 3, 5, 5) }

                            { Line(1, 5, 3, 7) }

                            { Circle(5, 1) }

                            { Circle(3, 3) }
                            { Circle(7, 3) }

                            { Circle(1, 5) }
                            { Circle(5, 5) }

                            { Circle(3, 7) }
                        </svg>
                    </div>
                    <div className="col-xs-4">
                        <svg width="200" height="400">
                            { Line(5, 1, 3, 3) }
                            { Line(5, 1, 7, 3) }

                            { Line(3, 3, 1, 5) }
                            { Line(3, 3, 5, 5) }

                            { Line(1, 5, 3, 7) }
                            { Line(5, 5, 7, 7) }


                            { Circle(5, 1) }

                            { Circle(3, 3) }
                            { Circle(7, 3, 'Remove') }

                            { Circle(1, 5) }
                            { Circle(5, 5) }

                            { Circle(3, 7) }
                            { Circle(7, 7, 'Add') }
                        </svg>
                    </div>
                    <div className="col-xs-4">
                        <svg width="200" height="400">
                            { Line(5, 1, 3, 3) }

                            { Line(3, 3, 1, 5) }
                            { Line(3, 3, 5, 5) }

                            { Line(1, 5, 3, 7) }
                            { Line(5, 5, 7, 7) }


                            { Circle(5, 1) }

                            { Circle(3, 3) }

                            { Circle(1, 5) }
                            { Circle(5, 5) }

                            { Circle(3, 7) }
                            { Circle(7, 7) }
                        </svg>
                    </div>
                </div>
            </section>
        );
    }
});