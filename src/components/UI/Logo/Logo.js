import React from 'react'
import classes from './Logo.module.css'
import logo from '../../../images/logo.svg'
import { Container,Slide} from '@material-ui/core';

const Logo = (props)=> {
  return(

    <Slide direction='right' in={true} timeout={500}>
    <Container className={classes.Logo}>
      <img src={logo} alt="logo" />
      <h2>MANAGER.<span>AI</span></h2>
    </Container>
    </Slide>
  )
}
export default Logo
