var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <section>
                <h3>Props vs State</h3>
                <small>
                    <table>
                        <thead>
                            <tr>
                                <th> </th>
                                <th>Props</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Can get initial value from parent Component{"?"}</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Can be changed by parent Component{"?"}</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Can set default values inside Component{"?"}</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Can change inside Component{"?"}</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Can set initial value for child Components{"?"}</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Can change in child Components{"?"}</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                        </tbody>
                    </table>
                </small>

                <aside className="notes">
                    Props, propriétés, sont des parametre immutable passé d'un parent à ces enfants
                    <br />
                    State, c'est un sapshot a un certin temps donné.
                    <br />
                    Normalement à la suite d'un input d'un utilisateur
                </aside>
            </section>
        );
    }
});