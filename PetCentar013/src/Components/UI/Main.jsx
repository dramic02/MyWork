import React from 'react'

import classes from './Main.module.css'

const Main = (props) => {
  return <div className={`${classes.wrapper} ${props.className}`}>{props.children}</div>
}

export default Main
