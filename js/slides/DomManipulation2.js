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

                <div className="row top-xs">
                    <div className="col-xs-5">
                        <table><tbody>
                            <tr><td>Green</td></tr>
                        </tbody></table>
                    </div>
                    <div className="col-xs-2"></div>
                    <div className="col-xs-5">
                        <table><tbody>
                            <tr><td>Red</td></tr>
                            <tr><td>Blue</td></tr>
                        </tbody></table>
                    </div>
                </div>
            </section>
        );
    }
});