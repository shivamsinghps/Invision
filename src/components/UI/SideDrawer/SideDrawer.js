import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Menu,Facebook,YouTube,Twitter} from '@material-ui/icons';
import {Divider,Button,Drawer,Typography} from '@material-ui/core';
import classess from './SideDrawer.module.css'
import SideList from './List/List'
import {connect} from 'react-redux'
import {side_toggle} from '../../../store/actions/ui'

const useStyles = makeStyles((theme) => ({

  list: {
    width: '23vw',
    [theme.breakpoints.down('sm')]: {
      width:'58vw',
    },
  },
  follow:{
    marginLeft:'5vw',
    width:'150px',
    position:'fixed',
    bottom:'50px',
    padding:'10px',
  },
  paper: {
  background: "#333333"
  }
}));


const SideDrawer=(props)=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const primarylinks = ['Home','AboutUs','OurWork','Techs','Career','Contact']
  const seclinks = ['UnBunked','TeamAnonymous']
  const toggleDrawer = () => {
    props.OnsideClick()
    setOpen(!open);
  };

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
    >
      <SideList links={primarylinks} />
      <Divider />
      <SideList links={seclinks} />
    </div>
  );

  return (
        <React.Fragment>
          <div className={classess.Menu}>
            <Button onClick={toggleDrawer}><Menu /></Button>
          </div>
          <Drawer transitionDuration={600}  classes={{ paper: classes.paper }} anchor='right'  open={open} onClose={toggleDrawer}>
              {list}
              <div className={classes.follow} >
              <Typography alignLeft variant='h6'>
                Follow Us On:
              </Typography>
              <Facebook fontSize='large'/>
              <YouTube fontSize='large'/>
              <Twitter fontSize='large'/>
              </div>
          </Drawer>
        </React.Fragment>
  );
}
const mapDispatchToProps=dispatch=>{
  return{
    OnsideClick:()=> dispatch(side_toggle()),
  }
}
export default connect(null,mapDispatchToProps)(SideDrawer)
