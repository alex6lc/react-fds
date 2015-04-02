var React = require('react');

var BlocModules = require('../components/Isomorphic/BlocModules');
var Separator = require('../components/Isomorphic/Separator');

module.exports = React.createClass({
    render() {
        return (<section>
            <h3>Fat Client, Thin Server</h3>

            <BlocModules
                items={['DOM Manipulation','Routing','View Layer','Application Logic']}
                location={'Client'}
                languages={['JavaScript']}
            />

            <Separator />

            <BlocModules
                items={['Application Logic','Persistence']}
                location={'Server'}
                languages={['Ruby','PHP','ASP.NET']}
            />
        </section>);
    }
});