import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import TaskDetails from './components/tasks/TaskDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateTask from './components/tasks/CreateTask'
import registerServiceWorker from "./registerServiceWorker";

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <div className="App">
                        <Navbar />
                        <Switch>
                            <Route exact path='/'component={Dashboard} />
                            <Route path='/project/:id' component={TaskDetails} />
                            <Route path='/signin' component={SignIn} />
                            <Route path='/signup' component={SignUp} />
                            <Route path='/create' component={CreateTask} />
                        </Switch>
                    </div>
                </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
