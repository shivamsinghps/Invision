import React from 'react'
import classes from './Contact.module.css'
import icon from '../../images/envelope-solid.svg';
import ProfileCard from '../AboutUs/Card/Card'
import { Grid } from '@material-ui/core';

const Contact = (props) => {
  const contacts ={
    imageUrl:icon,
    imageTitle:'Mail',
    Name:'MailUs',
    Description:'xyz@Invision'
  }
  // the repeated grid items are for testing only do replace them while mapping actual data
  return(
    <div className={classes.Contact}>
        <Grid container
        spacing={2}
          direction="row"
          justify="space-around"
          alignItems="center"
          style={{height:'90vh'}}>
        <Grid item xs={5} md={2}>
        <ProfileCard imageUrl={contacts.imageUrl}
        imageTitle={contacts.imageTitle}
        Name={contacts.Name}
        Description={contacts.Description}
        contact/>
        </Grid>
        <Grid item xs={5} md={2}>
        <ProfileCard imageUrl={contacts.imageUrl}
        imageTitle={contacts.imageTitle}
        Name={contacts.Name}
        Description={contacts.Description}
        contact/>
        </Grid>
        <Grid item xs={5} md={2}>
        <ProfileCard imageUrl={contacts.imageUrl}
        imageTitle={contacts.imageTitle}
        Name={contacts.Name}
        Description={contacts.Description}
        contact/>
        </Grid>
        <Grid item xs={5} md={2}>
        <ProfileCard imageUrl={contacts.imageUrl}
        imageTitle={contacts.imageTitle}
        Name={contacts.Name}
        Description={contacts.Description}
        contact/>
        </Grid>

        </Grid>
    </div>
  )
}
export default Contact
