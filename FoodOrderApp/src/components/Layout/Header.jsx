import React, { Fragment } from 'react'

import classes from './Header.module.css'

import mealsImage from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCardButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="mealsImage" />
      </div>
    </Fragment>
  )
}

export default Header
