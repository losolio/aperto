import React, { Component } from 'react';
import { render } from 'react-dom';
import Heading from './Heading';
import OpenBadge from './OpenBadge';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Heading title="Er leiligheta åpen?" />
        <OpenBadge status={true} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
