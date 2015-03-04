var React = require('react');


var { isomorphic } = require('../../styles');

module.exports = React.createClass({
    render() {
        var Line = (x1, y1, x2, y2) => {
            return <line x1={x1} y1={y1} x2={x2} y2={y2}
                strokeWidth={isomorphic.lineStrokeWidth}
                stroke={isomorphic.lineStrokeColor} />;
        };

        var sepHeight = isomorphic.sepHeight;
        var middleX = sepHeight / 2;
        var ViewBox = "0 0 " + sepHeight + " " + sepHeight;

        var endArrowY = 20;
        var rArrow = 5;

        return (<div className="row center-xs">
            <div className="col-xs-4">
                <svg width="100%" height={sepHeight}>
                    { Line(10000, middleX, 0, middleX) }
                </svg>
            </div>

            <div className="col-xs-1">
                <svg width="100%" height={sepHeight} viewBox={ViewBox}>
                    { Line(middleX, 0, middleX, sepHeight) }
                    { Line(middleX, 0, middleX - rArrow, endArrowY) }
                    { Line(middleX, 0, middleX + rArrow, endArrowY) }
                </svg>
            </div>
            <div className="col-xs-7">
                <svg width="100%" height={sepHeight}>
                    { Line(10000, middleX, 0, middleX) }
                </svg>
            </div>
        </div>);
    }
});