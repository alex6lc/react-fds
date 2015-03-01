var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h2>Single Page Application</h2>

                <ul>
                    <li className="fragment">SEO</li>
                    <li className="fragment">Performance</li>
                    <li className="fragment">Maintainability</li>
                </ul>
            </section>
        );
    }
});