import React from 'react';
import './wineListItem.css';


const WineListItem = (props) => {
  return (
    <div className="wine-list__item">
      <div>
        <img
          className="wine-list__image"
          src={ props.image }
          alt={ props.alt }
          />

        <a href="javascript:;" className="wine-list__title">{ props.name }</a>
      </div>
    </div>
  )
}

export default WineListItem;