var React = require('react');
var CodeEditor = require('../components/CodeEditor');
var selfCleaningTimeout = require('../mixins/selfCleaningTimeout');

var Playground = React.createClass({
    displayName: 'Playground',

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
                    <div ref="mount"></div>
                    {Error}
                </div>
            </div>
        );
    },

    getMountedInstances() {
        return [this.refs.mount.getDOMNode()];
    },

    executeCode() {
        var mountNode = this.refs.mount.getDOMNode();

        try {
            var module = {};
            var compiledCode = this.compileCode();
            var makeHot = this.makeHot;

            eval(compiledCode);
            eval([
                'if (module.exports) {',
                '  module.exports = makeHot(module.exports, "module.exports");',
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