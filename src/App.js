import React from 'react';

import Content from './components/Structure/Content';
import { ApiRequestProvider, ApiRequestConsumer } from './context/ApiContext';


const App = () => (
  <ApiRequestProvider>
    <ApiRequestConsumer>
      {context => <Content context={ context } /> }
    </ApiRequestConsumer>
  </ApiRequestProvider>
);

export default App;
