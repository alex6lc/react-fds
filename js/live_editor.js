var React = require('react');

var CodeMirrorEditor = React.createClass({displayName: 'CodeMirrorEditor',
    componentDidMount: function() {
        hljs.highlightBlock(this.refs.editor.getDOMNode());
    },

    componentDidUpdate: function() {
        if (this.props.readOnly) {
            //this.editor.setValue(this.props.codeText);
        }
    },

    handleFocus: function (event) {
        var codeEl = event.currentTarget.firstChild;
        codeEl.innerText = codeEl.innerText;
    },

    handleBlur: function (event) {
        hljs.highlightBlock( event.currentTarget );
    },

    handleChange: function(event) {
        if (!this.props.readOnly) {
            this.props.onChange && this.props.onChange(event.currentTarget.innerText);
        }
    },

    render: function() {
        var editor = React.createElement("pre", {ref: "editor", style: {overflow: 'scroll' },
                onKeyUp: this.handleChange,
                onBlur: this.handleBlur,
                onFocus: this.handleFocus
            },
            React.createElement("code", { className: "javascript", contentEditable: true } , this.props.codeText)
        );

        return (
            React.createElement("div", {style: this.props.style, className: this.props.className},
                editor
            )
        );
    }
});

var selfCleaningTimeout = {
    componentDidUpdate: function() {
        clearTimeout(this.timeoutID);
    },

    setTimeout: function() {
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout.apply(null, arguments);
    }
};

var ReactPlayground = React.createClass({displayName: 'ReactPlayground',
    mixins: [selfCleaningTimeout],

    propTypes: {
        codeText: React.PropTypes.string.isRequired,
        transformer: React.PropTypes.func
    },

    getDefaultProps: function() {
        return {
            transformer: function(code) {
                return JSXTransformer.transform(code, { harmony: true }).code;
            }
        };
    },

    getInitialState: function() {
        return {
            code: this.props.codeText,
            error: null
        };
    },

    handleCodeChange: function(value) {
        this.setState({code: value});
        this.executeCode();
    },

    compileCode: function() {
        return this.props.transformer(this.state.code);
    },

    render: function() {
        var compiledCode = '';
        try {
            compiledCode = this.compileCode();
        } catch (err) {}

        var JSXContent =
            React.createElement(CodeMirrorEditor, {
                key: "jsx",
                onChange: this.handleCodeChange,
                className: "playgroundStage",
                codeText: this.state.code
            });

        return (
            React.createElement("div", {className: "playground"},
                React.createElement("div", {className: "playgroundCode"},
                    JSXContent
                ),
                React.createElement("div", {className: "playgroundPreview"},
                    React.createElement("div", {ref: "mount"}),
                    this.state.error && React.createElement("div", {className: "playgroundError"}, this.state.error)
                )
            )
        );
    },

    componentDidMount: function() {
        // Note: we also inject a fake hook for this to work
        this.makeHot = ReactHotAPI(this.getMountedInstances);
        this.executeCode();
    },

    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.code !== prevState.code) {
            this.executeCode();
        }
    },

    getMountedInstances: function () {
        return [this.refs.mount.getDOMNode()];
    },

    executeCode: function() {
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

module.exports = ReactPlayground;
