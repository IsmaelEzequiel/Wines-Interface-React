import React from 'react';
import { Link } from 'react-router-dom';

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

        <Link to={`/${props.id}`} className="wine-list__title">{ props.name }</Link>
      </div>
    </div>
  )
}

export default WineListItem;
