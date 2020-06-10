import React , { Fragment } from 'react'
import classes from './AboutUs.module.css'
import imgAboutUs from '../../images/aboutus.jpg'
import { makeStyles } from "@material-ui/core/styles";
import userimg from '../../images/shivam.jpg'
import ProfileCard from './Card/Card'
import { Grid,Paper} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginBottom:'40px',
    flexWrap: "wrap",
    "& > *": {
      margin: 'auto',
      width: '70vw',
      height: '40vh'
    }
  }
}));

const AboutUs = (props)=>{
  const classess = useStyles();
const profile = {
  imageUrl:userimg,
  imageTitle:'FSD',
  Name:'Shivam Singh',
  Description:'Fullstack Developer'
}
//Use Map to populate data current structure is for test case only
  return(
    <Fragment>
    <header className={classes.AboutUs} style={{backgroundImage:`url(${imgAboutUs}) `}}>
    <h1 className={classes.Reveal}>About Us</h1>


    <Grid container spacing={2} justify='center'>
    <div className={classess.root} ><Paper elevation={11} >Quotes and info placeholder</Paper></div>
    </Grid>

    <Grid container spacing={2} justify='center'>
    <Grid item xs={4} sm={2} md={1} >
    <ProfileCard imageUrl={profile.imageUrl}
    imageTitle={profile.imageTitle}
    Name={profile.Name}
    Description={profile.Description}/>
    </Grid>
    <Grid item xs={4} sm={2} md={1} >
    <ProfileCard imageUrl={profile.imageUrl}
    imageTitle={profile.imageTitle}
    Name={profile.Name}
    Description={profile.Description}/>
    </Grid>
      <Grid item xs={4} sm={2} md={1}>
    <ProfileCard imageUrl={profile.imageUrl}
    imageTitle={profile.imageTitle}
    Name={profile.Name}
    Description={profile.Description}/>
    </Grid>
    <Grid item xs={4} sm={2} md={1}>
  <ProfileCard imageUrl={profile.imageUrl}
  imageTitle={profile.imageTitle}
  Name={profile.Name}
  Description={profile.Description}/>
  </Grid>
  <Grid item xs={4} sm={2} md={1}>
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
