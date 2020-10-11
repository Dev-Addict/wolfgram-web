import React from 'react';
import {
    Switch as RRDSwitch,
    withRouter
} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import '../../styles/Switch.css';

const Switch = withRouter(({location, children}) => (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={300}>
            <RRDSwitch>
                {children}
            </RRDSwitch>
        </CSSTransition>
    </TransitionGroup>
));

export default Switch;
