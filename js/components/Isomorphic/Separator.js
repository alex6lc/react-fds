var React = require('react');

var Arrow = require('../Isomorphic/Arrow');
var Line = require('../Line');

var { isomorphic } = require('../../styles');

module.exports = React.createClass({
    render() {
        var sepHeight = isomorphic.sepHeight;
        var middleY = Math.floor(sepHeight / 2);

        return (<div className="row">
            <div className="col-xs-4">
                <svg width="100%" height={sepHeight}>
                    <Line x1={10000} y1={middleY} x2={0} y2={middleY} isDash={true} styles={isomorphic} />
                </svg>
            </div>

            <div className="col-xs-1">
                <Arrow height={sepHeight} />
            </div>

            <div className="col-xs-7">
                <svg width="100%" height={sepHeight}>
                    <Line x1={10000} y1={middleY} x2={0} y2={middleY} isDash={true} styles={isomorphic} />
                </svg>
            </div>
        </div>);
    }
});