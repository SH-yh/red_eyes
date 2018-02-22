import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
require("../public/style/reset.css");
import Home from './home/Home';
import Market from './market/components/Market';
import Course from './course/components/Course';
import Salary from './salary/components/Salary';
import Team from './team/components/Team';
import Project from './project/components/Project';
import Apply from './apply/components/Apply';
import FAQ from './faq/components/FAQ.js';
const AppRouter = ()=> (
    <Router>
        <div>
            <Route  exact path="/" component={Home}/>
            <Route exact path="/market" component={Market}/>
            <Route exact path="/course" component={Course}/>
            <Route exact path="/salary" component={Salary}/>
            <Route exact path="/team" component={Team}/>
            <Route exact path="/project" component={Project}/>
            <Route exact path="/apply" component={Apply}/>
            <Route exact path="/faq" component={FAQ}/>
        </div>
    </Router>
);

export  default AppRouter;