import React, { Fragment } from 'react';
import './header.css';


const Header = (props) => {
  return(
    <Fragment>
      <header className="header">
        <h1 className="header__title">{ props.title }</h1>
      </header>
    </Fragment>
  )
}

export default Header;