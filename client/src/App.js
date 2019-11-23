import React, { Component } from 'react';
import logo from './assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
      this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Welcome to React
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.apiResponse}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
