var React = require('react');
var hljs = require('highlight.js');

var CodeEditor = React.createClass({
    displayName: 'CodeEditor',

    propTypes: {
        codeText: React.PropTypes.string.isRequired,
        language: React.PropTypes.string.isRequired,
        editable: React.PropTypes.bool,
        noTrim: React.PropTypes.bool,
        noEscape: React.PropTypes.bool
    },

    componentDidMount() {
        var editor = this.refs.editor.getDOMNode();

        // trim whitespace
        if (!this.props.noTrim && typeof editor.innerHTML.trim === 'function') {
            editor.innerHTML = editor.innerHTML.trim();
        }

        // escape html
        if (!this.props.noEscape) {
            editor.innerHTML = editor.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;");
        }

        hljs.highlightBlock(editor);
    },

    componentDidUpdate() {
        if (!this.props.editable) {
            //this.editor.setValue(this.props.codeText);
        }
    },

    handleFocus(event) {
        if (this.props.editable) {
            var codeEl = event.currentTarget.firstChild;
            codeEl.innerText = codeEl.innerText;
        }
    },

    handleBlur(event) {
        if (this.props.editable) {
            hljs.highlightBlock(event.currentTarget);
        }
    },

    handleChange(event) {
        if (this.props.editable) {
            this.props.onChange && this.props.onChange(event.currentTarget.innerText);
        }
    },

    render() {
        return (
            <pre onInput={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus}>
                <code ref="editor" className={this.props.language} contentEditable={this.props.editable}>{this.props.codeText}</code>
            </pre>
        );
    }
});

module.exports = CodeEditor;