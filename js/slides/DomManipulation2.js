var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <div className="row">
                    <div className="col-xs-5">
                        <h3>Before</h3>
                    </div>
                    <div className="col-xs-2"></div>
                    <div className="col-xs-5">
                        <h3>After</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-5">
                        <ul>
                            <li>Green</li>
                        </ul>
                    </div>
                    <div className="col-xs-2"></div>
                    <div className="col-xs-5">
                        <ul>
                            <li>Red</li>
                            <li>Blue</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
});