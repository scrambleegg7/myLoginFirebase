import React, { Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import firebase from './Firebase';
import Auth from './Auth';

import SignInOrUp from './screens/SignInOrUp';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';
import Home from './screens/Home';

class App extends Component {
    
    constructor(props) {
        super(props)
        this.state= {

        }
    }

    render() {

        return (
            <Router>
                <Switch>
                        <Route exact path="/signin" component={SignInOrUp} />
                        <Route exact path="/signup" component={SignUp} />
                    <Auth>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/profile" component={Profile} />
                            <Route render={() => <p>not found.</p>} />

                        </Switch>
                    </Auth>
                </Switch>

            </Router>
        )
    }
  
}

export default App;
