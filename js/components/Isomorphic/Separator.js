var React = require('react');


var { isomorphic } = require('../../styles');

module.exports = React.createClass({
    render() {
        var Line = (x1, y1, x2, y2, isDash) => {
            var strokeDashArray = isDash ? isomorphic.lineStrokeDashArray : '';
            return <line x1={x1} y1={y1} x2={x2} y2={y2}
                strokeWidth={isomorphic.lineStrokeWidth}
                stroke={isomorphic.lineStrokeColor}
                strokeDasharray={strokeDashArray} />;
        };

        var sepHeight = isomorphic.sepHeight;
        var middleY = Math.floor(sepHeight / 2);

        var arrowWith = 40;
        var endArrowY = 20;
        var arrowX1 = Math.floor(arrowWith / 2);

        return (<div className="row">
            <div className="col-xs-4">
                <svg width="100%" height={sepHeight}>
                    { Line(10000, middleY, 0, middleY, true) }
                </svg>
            </div>

            <div className="col-xs-1">
                <svg width={arrowWith} height={sepHeight} style={{ display: 'block', margin: 'auto' }}>
                    { Line(arrowX1, 0, arrowX1, sepHeight) }
                    { Line(arrowX1, 0, 0, endArrowY) }
                    { Line(arrowX1, 0, arrowWith, endArrowY) }
                </svg>
            </div>
            <div className="col-xs-7">
                <svg width="100%" height={sepHeight}>
                    { Line(10000, middleY, 0, middleY, true) }
                </svg>
            </div>
        </div>);
    }
});