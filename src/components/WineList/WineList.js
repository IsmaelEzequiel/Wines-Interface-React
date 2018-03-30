import React from 'react';
import './WineList.css';

import WineListItem from '../WineListItem/WineListItem';


const WineList = (props) => {
  return (
    <React.Fragment>
      <ul>
        {props.wines.map(wine =>
          <WineListItem key={wine.id} wineName={wine.name} />
        )}
      </ul>
    </React.Fragment>
  )
}

export default WineList;