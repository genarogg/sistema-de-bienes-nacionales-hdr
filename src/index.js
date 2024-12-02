import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./sass/style.css";

import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            {/* <Layout> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            {/* </Layout> */}
        </BrowserRouter>
    );
};

const container = document.getElementById('app');

ReactDOM.render(<App />, container);
