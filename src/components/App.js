import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// css //
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(this.props.history);
  }
  render() {
    return (
      <div className=''>
        <h1> Slack Chat App!!</h1>
      </div>
    );
  }
}

export default withRouter(App);
