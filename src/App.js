import React, { Component } from 'react';

import ApiWineList from './components/Api/ApiWineList';
import WineList from './components/WineList/WineList';


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
        <WineList wines={this.state.wines} />
      </div>
    );
  }
}

export default App;