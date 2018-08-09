import React, { Fragment } from 'react';
import './content.css';

import Header from './Header';
import WineList from '../WineList/WineList';


const Content = ({ context }) => (
  <Fragment>
    <Header title={'Beers list.'} />

    <main className="container">
      <WineList wines={ context.wines } isLoading={ context.isLoading } />
    </main>
  </Fragment>
);

export default Content;