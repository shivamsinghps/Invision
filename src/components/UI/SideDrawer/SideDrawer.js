import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import classess from './SideDrawer.module.css'
import SideList from './List/List'
import {connect} from 'react-redux'
import {side_toggle} from '../../../store/actions/ui'

const useStyles = makeStyles({

  list: {
    width: '28vw',
  },
  paper: {
  background: "#333333"
}
});

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
            <Button onClick={toggleDrawer}><MenuIcon /></Button>
          </div>
          <Drawer transitionDuration={600}  classes={{ paper: classes.paper }} anchor='right' open={open} onClose={toggleDrawer}>
            {list}
            <h5 className={classess.Lable} >&copy; Invision<br />Terms & Conditions</h5>


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
