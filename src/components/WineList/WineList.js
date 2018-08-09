import React from 'react';
import './WineList.css';

import WineListItem from '../WineListItem/WineListItem';
import withLoading from '../Loading';

const WineList = ({ wines }) => {
  return (
    <React.Fragment>
      <div className="wine-list">
        {wines
          ? wines.map(wine =>
            <WineListItem
              key={ wine.id }
              id={ wine.id }
              name={ wine.name }
              image={ wine.image_url }
              alt={ wine.name }
            />
          )
          : <h1>Tente ligar a net =/</h1>
        }
      </div>
    </React.Fragment>
  )
}

export default withLoading(WineList);
