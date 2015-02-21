var React = require('react');
var hljs = require('highlight.js');

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
        var editor = React.createElement("pre", { ref: "editor",
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

module.exports = CodeMirrorEditor;