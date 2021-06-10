import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import { CryptoProvider } from "./Pages/Crypto/Context";

import Crypto from "./Pages/Crypto/index";
import Movies from "./Pages/Movie/index";

export default function HomePage() {
    return (
        <>
            <CryptoProvider>
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/cryptos">Crypto</Link>
                            </li>
                            <li>
                                <Link to="/movies">Movies</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/cryptos" exact>
                            <Crypto />
                        </Route>
                        <Route path="/movies" exact>
                            <Movies />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </CryptoProvider>
        </>
    );
}
