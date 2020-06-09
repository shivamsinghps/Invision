import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import classes from './Home.module.css'
import SubmitModal from '../Modal'
import headerBackground from '../../../images/Header.jpg'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import mailLOGO from '../../../images/envelope-solid.svg'
import TextField from '@material-ui/core/TextField';
import { Grid,Slide,Container } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Logo from '../Logo/Logo'
import {connect} from 'react-redux'


const useStyles = makeStyles((theme) => ({

  title: {
    fontSize: 22,
  }
}));
const Header = (props)=>{
  const classess = useStyles();
  const submitHandler = (e) =>{
   e.preventDefault()
 }
  return(
    <header className={classes.Header} style={{backgroundImage: `url(${headerBackground}) `,right:props.side?'24vw':'0px'}}>


        <Logo />


    <Slide direction='right' in={true} timeout={1000}>
      <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center"
              style={{height:'90vh'}}>
        <Grid item xs={12} sm={4}>
        <button onClick={console.log('ha')}>haha</button>
        </Grid>
        <Grid item xs={8} sm={4} md={3}>
        <Container >

          <h1 style={{color:'white'}}>Let's Boost the productivity with<span>AI</span></h1>
        </Container>
        </Grid>

        </Grid>
        </Slide>
</header>
  )
}

const mapStateToProps = state =>{
  return{
  side:state.ui.side
}}



export default connect(mapStateToProps)(Header)
