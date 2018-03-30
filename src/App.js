import React, { Component } from 'react';

import ApiWineList from './components/Api/ApiWineList';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      wines: []
    };
  }

  componentWillMount() {
    ApiWineList().then(data => {
      this.setState({ wines: data })
    });
  }

  render() {
    return (
      <div>
        { console.log( this.state.wines ) }
      </div>
    );
  }
}

export default App;

