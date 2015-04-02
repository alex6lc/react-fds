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
                <h3>Virtual DOM - Diff</h3>
                <div className="row middle-xs">
                    <div className="col-xs-4">
                        <svg width="200" height="400">
                        { Line(5, 1, 3, 4) }
                        { Line(5, 1, 7, 4) }

                        { Line(3, 4, 1, 7) }
                        { Line(3, 4, 5, 7) }

                        { Line(5, 7, 3, 10) }

                        { Circle(5, 1) }

                        { Circle(3, 4) }
                        { Circle(7, 4) }

                        { Circle(1, 7) }
                        { Circle(5, 7) }

                        { Circle(3, 10) }
                        </svg>
                    </div>
                    <div className="col-xs-4">
                        <svg width="200" height="400">
                        { Line(5, 1, 3, 4) }
                        { Line(5, 1, 7, 4) }

                        { Line(3, 4, 1, 7) }
                        { Line(3, 4, 5, 7) }

                        { Line(5, 7, 3, 10) }
                        { Line(5, 7, 7, 10) }


                        { Circle(5, 1) }

                        { Circle(3, 4) }
                        { Circle(7, 4, 'Remove') }

                        { Circle(1, 7) }
                        { Circle(5, 7) }

                        { Circle(3, 10) }
                        { Circle(7, 10, 'Add') }
                        </svg>
                    </div>
                    <div className="col-xs-4">
                        <svg width="200" height="400">
                        { Line(5, 1, 3, 4) }

                        { Line(3, 4, 1, 7) }
                        { Line(3, 4, 5, 7) }

                        { Line(5, 7, 3, 10) }
                        { Line(5, 7, 7, 10) }


                        { Circle(5, 1) }

                        { Circle(3, 4) }

                        { Circle(1, 7) }
                        { Circle(5, 7) }

                        { Circle(3, 10) }
                        { Circle(7, 10) }
                        </svg>
                    </div>
                </div>

                <div className="row middle-xs">
                    <div className="col-xs-4">Old Tree</div>
                    <div className="col-xs-4">Mutations</div>
                    <div className="col-xs-4">New Tree</div>
                </div>
            </section>
        );
    }
});