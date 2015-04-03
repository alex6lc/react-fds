var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Life Cycle</h3>

                <br/>

                <div className="row middle-xs">
                    <div className="col-xs-6">Mounting</div>
                    <div className="col-xs-6">Unmounting</div>
                </div>

                <div className="row middle-xs">
                    <div className="col-xs-6">
                        <small>componentWillMount()</small>
                        <small>componentDidMount()</small>
                    </div>
                    <div className="col-xs-6">
                        <small>componentWillUnmount()</small>
                    </div>
                </div>

                <br/>

                <div className="row middle-xs">
                    <div className="col-xs-12">Updating</div>
                </div>

                <div className="row middle-xs">
                    <div className="col-xs-12">
                        <small>componentWillReceiveProps(nextProps)</small>
                        <small>shouldComponentUpdate(nextProps, nextState)</small>
                        <small>componentWillUpdate(nextProps, nextState)</small>
                        <small>componentDidUpdate(prevProps, prevState)</small>
                    </div>
                </div>
            </section>
        );
    }
});