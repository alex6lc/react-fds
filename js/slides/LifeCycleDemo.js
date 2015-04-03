var React = require('react');
var Playground = require('../components/Playground');

var demo = `
module.exports = React.createClass({
    getInitialState() {
        return { elapsed: 0, start: new Date() };
    },
    componentDidMount() {
        this.timer = setInterval(this.tick, 50);
    },
    componentWillUnmount() {
        clearInterval(this.timer);
    },
    tick() {
        this.setState({elapsed: new Date() - this.state.start});
    },
    render() {
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);

        return <small>This example was started
        <b> {seconds}</b> seconds ago.</small>;
    }
});
`;

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Demo - Life Cycle</h3>

                <Playground codeText={demo} />
            </section>
        );
    }
});