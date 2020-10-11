import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Switch from "./routing/Switch";
import SignIn from "./routes/SignIn";

const App = () => {
    return (
        <Router>
            <div className="content">
                <Switch>
                    <Route path="/signin" component={SignIn} exact/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
