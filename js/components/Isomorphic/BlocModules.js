var React = require('react');

module.exports = React.createClass({
    propTypes: {
        location: React.PropTypes.string,
        languages: React.PropTypes.array,
        items: React.PropTypes.array
    },
    render() {
        var items = this.props.items.map((item, i) => {
            return <div className="row" key={i}><div className="item col-xs">{item}</div></div>;
        });

        var languages = this.props.languages.map((language, i) => {
            return <small key={i}>{language}</small>;
        });
        return (
            <div className="row">
                <div className="col-xs-1"></div>
                <div className="col-xs-7">
                    <div className="box">{items}</div>
                </div>
                <div className="col-xs-1"></div>
                <div className="col-xs-3">
                    <div>{this.props.location}</div>
                    {languages}
                </div>
            </div>
        );
    }
});