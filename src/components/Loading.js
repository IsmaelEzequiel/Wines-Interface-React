import React from 'react';

const LoadingComponent = () => <h1>Carregando... =D</h1>;

const withLoading = WrappedComponent => {
  return ({ isLoading, ...props }) => {
    return isLoading
      ? <LoadingComponent />
      : <WrappedComponent {...props} />
  }
}

export default withLoading;