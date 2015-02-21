var hljs = require('highlight.js');

module.exports = {
    componentDidMount: function() {
        var hljs_nodes = this.getDOMNode().querySelectorAll( 'pre code' );

        for( var i = 0, len = hljs_nodes.length; i < len; i++ ) {
            var element = hljs_nodes[i];

            // trim whitespace if data-trim attribute is present
            if( element.hasAttribute( 'data-trim' ) && typeof element.innerHTML.trim === 'function' ) {
                element.innerHTML = element.innerHTML.trim();
            }

            // Now escape html unless prevented by author
            if( ! element.hasAttribute( 'data-noescape' )) {
                element.innerHTML = element.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;");
            }
        }
        hljs.initHighlightingOnLoad();
    }
};
