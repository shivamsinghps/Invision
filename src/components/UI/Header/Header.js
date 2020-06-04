import React from 'react'
import classes from './Header.module.css'
import headerBackground from '../../../images/blog-head.jpg'
const header = (props)=>{
let height = props.height?props.height+'px':null
let back = props.back? props.back + '%' : null

  return(
    <header className={classes.Header} style={{height:height,lineHeight:height, backgroundPositionY:back,background: `url(${headerBackground}) no-repeat 50% 50%`}}>
      <h1>Heading</h1>
    </header>
  )
}
export default header
