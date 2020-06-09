import React , { Fragment } from 'react'
import classes from './AboutUs.module.css'
import imgAboutUs from '../../images/aboutus.jpg'
import userimg from '../../images/shivam.jpg'
import ProfileCard from './Card/Card'
import { Grid } from '@material-ui/core';

const AboutUs = (props)=>{
const profile = {
  imageUrl:userimg,
  imageTitle:'FSD',
  Name:'Shivam Singh',
  Description:'Fullstack Developer'
}
  return(
    <Fragment>
    <header className={classes.AboutUs} style={{backgroundImage:`url(${imgAboutUs}) `}}>
    <h1 className={classes.Reveal}>About Us</h1>

    <Grid container spacing={2} justify='space-evenly'>
    <Grid item xs={6} sm={4} md={2} >
    <ProfileCard imageUrl={profile.imageUrl}
    imageTitle={profile.imageTitle}
    Name={profile.Name}
    Description={profile.Description}/>
    </Grid>
    <Grid item xs={6} sm={4} md={2} >
    <ProfileCard imageUrl={profile.imageUrl}
    imageTitle={profile.imageTitle}
    Name={profile.Name}
    Description={profile.Description}/>
    </Grid>
      <Grid item xs={6} sm={4} md={2}>
    <ProfileCard imageUrl={profile.imageUrl}
    imageTitle={profile.imageTitle}
    Name={profile.Name}
    Description={profile.Description}/>
    </Grid>
    <Grid item xs={6} sm={4} md={2}>
  <ProfileCard imageUrl={profile.imageUrl}
  imageTitle={profile.imageTitle}
  Name={profile.Name}
  Description={profile.Description}/>
  </Grid>
  <Grid item xs={6} sm={4} md={2}>
<ProfileCard imageUrl={profile.imageUrl}
imageTitle={profile.imageTitle}
Name={profile.Name}
Description={profile.Description}/>
</Grid>
    </Grid>

    </header>

    </Fragment>
  )
}
export default AboutUs
