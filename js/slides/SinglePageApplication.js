var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>SPA issues{"?"}</h3>

                <p className="fragment">SEO</p>
                <p className="fragment">Performance</p>
                <p className="fragment">Maintainability</p>
            </section>
        );
    }
});