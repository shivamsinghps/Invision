import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import classes from './Header.module.css'
import SubmitModal from '../Modal'
import headerBackground from '../../../images/Header.jpg'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SideDrawer from '../SideDrawer/SideDrawer'
import mailLOGO from '../../../images/envelope-solid.svg'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
  },
  },
  title: {
    fontSize: 34,
  }
}));
const Header = (props)=>{
  const classess = useStyles();
  const submitHandler = (e) =>{
   e.preventDefault()
   console.log('submitted');
 }
  return(
    <header className={classes.Header} style={{backgroundImage: `url(${headerBackground}) `}}>
      <div className={classes.Logo}>
        <p>Logo</p>
      </div>
      <SideDrawer />

        <Card className={classes.root} border={1} variant="outlined">
            <CardContent>
                <Typography className={classess.title} >
                  Join Us! Let's Move Forward
                </Typography><img className={classes.MailLogo} src={mailLOGO} alt='mail-logo' />
            </CardContent>
            <CardContent>
                <form  onSubmit={submitHandler} noValidate>
                <TextField style={{width:'60%',marginBottom:'10px'}} id="filled-basic" label="EmailID" variant="filled" />
                <Button type='submit' style={{display:'block',width:'50%',margin:'auto'}}><SubmitModal /></Button>
                </form>
            </CardContent>
        </Card>
    </header>
  )
}
export default Header
