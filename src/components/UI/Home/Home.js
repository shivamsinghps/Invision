import React ,{useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Slide,Container,Button,Card,CardContent,Typography,TextField } from '@material-ui/core';
import Logo from '../Logo/Logo'
import classes from './Home.module.css'
import SubmitModal from '../Modal'
import headerBackground from '../../../images/Header.jpg'

import {connect} from 'react-redux'


const useStyles = makeStyles((theme) => ({

  title: {
    fontSize: 22,
  }
}));
const Header = (props)=>{
  const classess = useStyles();
  const [email, setEmail] = useState("");
  const [modal,setModal] = useState(false)
  const [isValid, setIsValid] = useState(false);

  const emailpattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const changeHandler = (event) => {
     setEmail(event.target.value);

  }

  const handleModal = () => {
     setModal(false)
     setEmail("");
  }

  const submitHandler = (e) =>{
   e.preventDefault()
   setIsValid(emailpattern.test(email))
   setModal(true)
   console.log(email,isValid,modal);
}


let submit = null
if(email&&modal){
  submit = <SubmitModal open={modal} valid={isValid} emailid={email} handleClose={handleModal} />
}
  return(
    <header className={classes.Header} style={{backgroundImage: `url(${headerBackground}) `,right:props.side?'23vw':null}}>

    {submit}
        <Logo />


        <Slide direction='right' in={true} timeout={1000}>
              <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      style={{height:'90vh'}}>
                <Grid item xs={12} sm={3}>
                <Card style={{margin:'40px'}} border={1} variant="outlined">
                    <CardContent>
                        <Typography className={classess.title} >
                          Join Us! Let's Move Forward
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <form  onSubmit={submitHandler} noValidate>
                        <TextField style={{marginBottom:'10px'}}
                              id="standard-multiline-flexible"
                              label="Email-ID"
                              multiline
                              rowsMax={4}
                              value={email}
                              onChange={changeHandler}
                            />
                        <Button type='submit' style={{display:'block',width:'50%',margin:'auto',padding:'20px'}}>
                        Submit
                        </Button>
                        </form>
                    </CardContent>
                </Card>
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
