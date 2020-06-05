import React , { Fragment } from 'react'
import classes from './AboutUs.module.css'
import imgAboutUs from '../../images/aboutus.jpg'
import userimg from '../../images/shivam.jpg'
import ProfileCard from './Card/Card'


const AboutUs = (props)=>{
const profile = {
  imageUrl:userimg,
  imageTitle:'FSD',
  Name:'Shivam Singh',
  Description:'Fullstack Developer'
}
  return(
    <Fragment>
    <header className={classes.AboutUs} style={{backgroundImage: `url(${imgAboutUs}) `}}>
    <h1 className={classes.Reveal}>About Us</h1>

    <div className={classes.Ourteam}>
    <label className={classes.Lable}>Our Vision</label>
    </div>
    <div className={classes.Ourteam}>
    <label className={classes.Lable}>Our Team</label>
    <ProfileCard imageUrl={profile.imageUrl}
    imageTitle={profile.imageTitle}
    Name={profile.Name}
    Description={profile.Description}/>
    </div>
    </header>

    </Fragment>
  )
}
export default AboutUs
