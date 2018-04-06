import React from 'react';
import './WineList.css';

import WineListItem from '../WineListItem/WineListItem';


const WineList = (props) => {
  return (
    <React.Fragment>
      <div className="wine-list">
        { props.wines.map(wine =>
          <WineListItem
            key={ wine.id }
            name={ wine.name }
            image={ wine.image_url }
            alt={ wine.name }
            />
        )}
      </div>
    </React.Fragment>
  )
}

export default WineList;