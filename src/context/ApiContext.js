import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

import { ApiWineList } from '../components/Api/ApiWineList';

const ApiContext = createContext();

class ApiRequestProvider extends Component {
  state = {
    wines: [],
    isLoading: true
  }

  async componentDidMount() {
    try {
      let wineData = await ApiWineList();

      this.setState({
        wines: wineData,
        isLoading: false
      });
    } catch (err) {
      console.log(`Error 2: ${err}`);
    }
  }

  render () {
    return (
      <ApiContext.Provider
        value={{
          wines: this.state.wines,
          isLoading: this.state.isLoading
        }}
      >
        { this.props.children }
      </ApiContext.Provider>
    )
  }
}

const ApiRequestConsumer = ApiContext.Consumer;

ApiRequestProvider.propTypes = {
  children: PropTypes.element.isRequired 
}

export {
  ApiRequestConsumer,
  ApiRequestProvider
}