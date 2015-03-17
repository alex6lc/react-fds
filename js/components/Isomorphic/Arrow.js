var React = require('react');

var Line = require('../Line');

var { isomorphic } = require('../../styles');

module.exports = React.createClass({
    propTypes: {
        height: React.PropTypes.number
    },
    render() {
        var height = this.props.height;

        var arrowWith = 40;
        var endArrowY = 20;
        var arrowX1 = Math.floor(arrowWith / 2);

        return (
            <svg width={arrowWith} height={height} style={{ display: 'block', margin: 'auto' }}>
                <Line x1={arrowX1} y1={0} x2={arrowX1} y2={height} styles={isomorphic} />
                <Line x1={arrowX1} y1={0} x2={0} y2={endArrowY} styles={isomorphic} />
                <Line x1={arrowX1} y1={0} x2={arrowWith} y2={endArrowY} styles={isomorphic} />
            </svg>
        );
    }
});