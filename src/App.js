import React, { Component } from 'react';

import ApiWineList from './components/Api/ApiWineList';
import Content from './components/Structure/Content';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      wines: [],
      isLoading: true
    };
  }

  componentWillMount() {
    ApiWineList().then(data => {
      this.setState({
        wines: data,
        isLoading: false
      })
    });
  }

  render() {
    return (
      <Content isLoading={ this.state.isLoading } wines={ this.state.wines } />
    );
  }
}

export default App;