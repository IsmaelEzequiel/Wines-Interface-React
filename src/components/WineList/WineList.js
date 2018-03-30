import React, { Component } from 'react';
import 'WineList.css';


const WineList = (wineName) => {
  return (
    <React.Fragment>
      <li>{{ props.wineName }}</li>
    </React.Fragment>
  )
}