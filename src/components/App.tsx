import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";

import Switch from "./routing/Switch";

const App = () => {
    return (
        <Router>
            <div className="content">
                <Switch>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
