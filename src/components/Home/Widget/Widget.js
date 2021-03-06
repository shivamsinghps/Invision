import React from 'react'
import { Grid,Slide,Container,Button,Card,CardContent,Typography,TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
  }
}));

const HomeWiget = (props)=>{
  const classess = useStyles();
  let formInputField = props.iscustomer ?(
    <form  onSubmit={props.submitPassHandler} noValidate>
    <TextField style={{marginBottom:'10px'}}
          id="standard-multiline-flexible"
          label="Password"
          multiline
          rowsMax={4}
          value={props.password}
          onChange={props.changepassHandler}
        />
    <Button type='submit' style={{display:'block',width:'50%',margin:'auto',padding:'20px'}}>
    Submit
    </Button>
  </form>):(<form  onSubmit={props.submitHandler} noValidate>
    <TextField style={{marginBottom:'10px'}}
          id="standard-multiline-flexible"
          label="Email-ID"
          multiline
          rowsMax={4}
          value={props.email}
          onChange={props.changeHandler}
        />
    <Button type='submit' style={{display:'block',width:'50%',margin:'auto',padding:'20px'}}>
    Submit
    </Button>
  </form>)
  return(
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
            {formInputField}
          </CardContent>
        </Card>
      </Grid>
    <Grid item xs={8} sm={4} md={3}>
    <Container >
      <h1 style={{color:'white'}}>Let's Boost the productivity with  <span>AI</span></h1>
    </Container>
</Grid>
</Grid>
</Slide>
  )
}
export default HomeWiget
