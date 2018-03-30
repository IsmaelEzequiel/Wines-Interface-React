import React from 'react';


const WineListItem = (props) => {
  return (
    <React.Fragment>
      <li key={props.keyValue}>{ props.wineName }</li>
    </React.Fragment>
  )
}

export default WineListItem;