var React = require('react');
var CodeEditor = require('../components/CodeEditor');
var selfCleaningTimeout = require('../mixins/selfCleaningTimeout');

var Playground = React.createClass({
    mixins: [selfCleaningTimeout],

    propTypes: {
        codeText: React.PropTypes.string.isRequired,
        transformer: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            transformer: function(code) {
                return JSXTransformer.transform(code, { harmony: true }).code;
            }
        };
    },

    getInitialState() {
        return {
            code: this.props.codeText,
            error: null
        };
    },

    componentDidMount() {
        // Note: we also inject a fake hook for this to work
        this.makeHot = ReactHotAPI(this.getMountedInstances);
        this.executeCode();
    },

    componentDidUpdate(prevProps, prevState) {
        if (this.state.code !== prevState.code) {
            this.executeCode();
        }
    },

    handleCodeChange(value) {
        this.setState({code: value});
        this.executeCode();
    },

    compileCode() {
        return this.props.transformer(this.state.code);
    },

    render() {
        var compiledCode = '';
        try {
            compiledCode = this.compileCode();
        } catch (err) {}

        var Error = this.state.error ? <div className="playgroundError">{this.state.error}</div> : '';

        return (
            <div className="row">
                <div className="col-xs-10">
                    <CodeEditor key="jsx" language="javascript" editable={true} onChange={this.handleCodeChange} codeText={this.state.code} />
                </div>
                <div className="col-xs-2">
                    <div ref="mount" className="playground-preview"></div>
                    {Error}
                    <div className="playground-action">
                        <button onClick={this.reset}>Reset</button>
                    </div>
                </div>
            </div>
        );
    },

    getMountedInstances() {
        return [this.refs.mount.getDOMNode()];
    },

    reset() {
        this.executeCode(true);
    },

    executeCode(reset) {
        var mountNode = this.refs.mount.getDOMNode();

        try {
            var module = {};
            var compiledCode = this.compileCode();
            var makeHot = this.makeHot;

            eval(compiledCode);
            eval([
                'if (module.exports) {',
                (reset === true)
                    ? ''
                    : '  module.exports = makeHot(module.exports, "module.exports");',
                '  React.render(React.createElement(module.exports), mountNode);',
                '}'
            ].join('\n'));
            this.setState({
                error: null
            });
        } catch (err) {
            this.setState({
                error: err.toString()
            });
        }
    }
});

module.exports = Playground;