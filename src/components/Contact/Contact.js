import React from 'react'
import classes from './Contact.module.css'
import icon from '../../images/envelope-solid.svg';
import ProfileCard from '../AboutUs/Card/Card'

const Contact = (props) => {
  const contacts ={
    imageUrl:icon,
    imageTitle:'Mail',
    Name:'MailUs',
    Description:'xyz@Invision'
  }
  return(
    <div className={classes.Contact}>
      <div className={classes.Contacts}>
        <div className={classes.Ourteam}>
          <ProfileCard imageUrl={contacts.imageUrl}
          imageTitle={contacts.imageTitle}
          Name={contacts.Name}
          Description={contacts.Description}
          contact/>
        </div>
      </div>
    </div>
  )
}
export default Contact
