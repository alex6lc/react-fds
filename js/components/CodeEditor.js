var React = require('react');
var hljs = require('highlight.js');

var CodeEditor = React.createClass({
    displayName: 'CodeEditor',

    componentDidMount() {
        hljs.highlightBlock(this.refs.editor.getDOMNode());
    },

    componentDidUpdate() {
        if (this.props.readOnly) {
            //this.editor.setValue(this.props.codeText);
        }
    },

    handleFocus(event) {
        var codeEl = event.currentTarget.firstChild;
        codeEl.innerText = codeEl.innerText;
    },

    handleBlur(event) {
        hljs.highlightBlock( event.currentTarget );
    },

    handleChange(event) {
        if (!this.props.readOnly) {
            this.props.onChange && this.props.onChange(event.currentTarget.innerText);
        }
    },

    render() {
        return (
            <div style={this.props.style} className={this.props.className}>
                <pre ref="editor" onKeyUp={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus}>
                    <code className="javascript" contentEditable="true">{this.props.codeText}</code>
                </pre>
            </div>
        );
    }
});

module.exports = CodeEditor;