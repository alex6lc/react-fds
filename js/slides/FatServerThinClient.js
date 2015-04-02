var React = require('react');

var BlocModules = require('../components/Isomorphic/BlocModules');
var Separator = require('../components/Isomorphic/Separator');

module.exports = React.createClass({
    render() {
        return (<section>
            <h3>Fat Server, Thin Client</h3>

            <BlocModules
                items={['DOM Manipulation']}
                location={'Client'}
                languages={['JavaScript']}
            />

            <Separator />

            <BlocModules
                items={['Routing','View Layer','Application Logic','Persistence']}
                location={'Server'}
                languages={['Ruby','PHP','ASP.NET']}
            />
        </section>);
    }
});