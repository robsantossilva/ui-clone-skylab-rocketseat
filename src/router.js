import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Package from './pages//Package';

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Home} />
                <Route path="/journey/starter" component={Package} />
                <Route path="/node/:course_name" component={Lessons} />
            </Switch>
        </BrowserRouter>
    );
}