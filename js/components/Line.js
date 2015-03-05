var React = require('react');

module.exports = React.createClass({
    propTypes: {
        x1: React.PropTypes.number,
        y1: React.PropTypes.number,
        x2: React.PropTypes.number,
        y2: React.PropTypes.number,

        ratio:  React.PropTypes.number,
        paddingLeft:  React.PropTypes.number,
        paddingTop:  React.PropTypes.number,

        styles:  React.PropTypes.object
    },
    render() {
        var ratio = this.props.ratio || 1;
        var paddingLeft = this.props.paddingLeft || 0;
        var paddingTop = this.props.paddingTop || 0;

        var x1 = this.props.x1 * ratio + paddingLeft;
        var x2 = this.props.x2 * ratio + paddingLeft;
        var y1 = this.props.y1 * ratio + paddingTop;
        var y2 = this.props.y2 * ratio + paddingTop;

        return <line x1={x1} y1={y1} x2={x2} y2={y2}
            strokeWidth={this.props.styles.lineStrokeWidth}
            stroke={this.props.styles.lineStrokeColor} />;
    }
});