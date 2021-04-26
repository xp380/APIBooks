import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            error: null,
            users: []
        };
    }

    componentDidMount() {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur").then(
            results => this.setState({ isLoaded: true, users: results.data }),
            error => {
                this.setState({ isLoaded: false, error });
            }
        );
    }

    render() {
        const { isLoaded, error, users } = this.state;

        if (error) {
            return <p>Error: {error.message}</p>;
        } else if (!isLoaded) {
            return <p>Loading...</p>;
        } else {
            return (
                <table>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>Name: {user.symbol}</td>
                        </tr>
                    ))}
                </table>
            );
        }
    }
}
