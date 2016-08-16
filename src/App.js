import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    getSrc(host) {
        return `https://${host}/resources/images/logos/standard/logo-nav@2x.png`;
    }

    render() {
        let host = 'angular.io';
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <img src={this.getSrc(host)}/>
            </div>
        );
    }
}

export default App;
