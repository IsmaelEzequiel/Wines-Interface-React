import React, { Fragment } from 'react';
import './content.css';

import Header from './Header';
import WineList from '../WineList/WineList';


const Content = (props) => {
  return (
    <Fragment>
      <Header title={'Beers list.'} />

      <main className="container">
        { props.isLoading ? 'Loading...' : <WineList wines={props.wines} /> }
      </main>
    </Fragment>
  )
}

export default Content;