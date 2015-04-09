var React = require('react');
var Notes = require('../components/Notes');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Alert Notification</h3>
                <div className="row middle-xs">
                    <div className="col-xs-3"></div>
                    <div className="col-xs-6">
                        <div className="rel" style={{height: 400}}>
                            <div style={{ margin: '0 auto', position: 'absolute', width: '100%'}}>
                                <img src="images/0alert.png" />
                            </div>
                            <img src="images/12alert.png" style={{ position: 'absolute', top: 200, left: 0}}/>
                            <img src="images/99alert.png" style={{ position: 'absolute', top: 200, right: 0}}/>
                        </div>
                    </div>
                    <div className="col-xs-3"></div>
                </div>

                <Notes notes={[
                    'gestionnaire recoit des alerts celon un set de regles precise',
                    'Si un employer sur le terrain commence son appelle en retard',
                    '3 états',
                    '6 transitions (n ^ 2 - n)',
                    'Modeler les transitions == facon imperative'
                ]} />
            </section>
        );
    }
});